// Stripe Controllers
// ****************

// Imports
// *******
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);
// Mongoose schemas
const stripePerson = require("../models/stripePerson");
// Unique id generator
const Id = require("../models/createId");

// Exports
// *******
module.exports = {
  // Create test checkout
  createTestCheckout: async (req, res) => {
    console.log("STARTING STRIPE CHECKOUT:");
    const YOUR_DOMAIN = "http://localhost:3000"; // Make env variable after testing
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1OXbbTEurgv9fqbvVFILXzvK", // PoductID
          quantity: 1,
        },
      ],
      discounts: [
        {
          coupon: "VHkf6Yig", // Replace with your actual coupon code
        },
      ],
      // coupon: "ZI6lmVqj", // CouponID
      phone_number_collection: {
        enabled: true,
      },
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.redirect(303, session.url);
  },

  stripeSuccess: (req, res) => {
    // Retrieve the ID from the query parameters
    res.render("success.ejs");
  },

  stripeCancel: (req, res) => {
    res.render("store_index.ejs");
  },

  getOrderInfo: async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.retrieve(
        req.query.session_id
      );
      console.log("session variable:");
      console.log(session);
      res.json({
        session: session,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // // Webhook endpoint to handle events
  // stripeWebhook: async (req, res) => {
  //   console.log("WEBHOOK STARTING");
  //   let event;
  //   // Read the event
  //   try {
  //     event = req.body;
  //   } catch (err) {
  //     console.log(`Webhook error: ${err.message}`);
  //     return res.status(400).send(`Webhook error: ${err.message}`);
  //   }
  //   // Handle the event
  //   switch (event.type) {
  //     case "checkout.session.completed":
  //       // Get data from Stripe
  //       const session = event.data.object;
  //       const payment_id = session.payment_intent;
  //       const live_mode = session.livemode;
  //       const name = session.customer_details.name;
  //       const email = session.customer_details.phone;
  //       const phone = session.customer_details.email;
  //       try {
  //         // Generate unique ID
  //         const tempId = Id.generateUniqueID(4);
  //         // Create record in mongoDB
  //         const person = new stripePerson({
  //           paymentId: payment_id,
  //           livemode: live_mode,
  //           name: name,
  //           email: email,
  //           phone: phone,
  //           access_id: tempId,
  //         });

  //         // Save the person record
  //         const result = await person.save();

  //         // Introduce a 10-second delay
  //         await new Promise((resolve) => setTimeout(resolve, 10000));

  //         // Create QRcode url
  //         const myQrcode =
  //           "https://api.qrserver.com/v1/create-qr-code/?data=" +
  //           result.access_id.toString() +
  //           "&amp;size=200x200";

  //         // Render confirmation page
  //         console.log("Redirecting QR page:");
  //         res.render("stripe_confirmation.ejs", {
  //           // Include variables
  //           idAlumno: result.access_id.toString(),
  //           qrWww: myQrcode,
  //           nombreAlumno: result.name,
  //         });
  //         // Ensure to send a response at the end
  //         res.status(200).end();
  //       } catch (err) {
  //         console.log(err);
  //         return res.status(500).send("Internal Server Error");
  //       }
  //       break;

  //     // Add more cases for other events if needed
  //     case "payment_intent.succeeded":
  //       break;
  //     case "payment_intent.created":
  //       break;
  //     default:
  //       console.log(`Unhandled event type: ${event.type}`);
  //   }
  //   // Ensure to send a response at the end
  //   res.status(200).end();
  // },
};
