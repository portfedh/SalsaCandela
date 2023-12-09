// Stripe Controllers
// ****************

// Imports
// *******
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

// Exports
// *******
module.exports = {
  // Create test checkout
  createTestCheckout: async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1OIZ1iEurgv9fqbvuGr9oeA7",
          quantity: 1,
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.redirect(303, session.url);
  },

  // Webhook endpoint to handle events
  stripeWebhook: async (req, res) => {
    let event;
    // Read the event
    try {
      event = req.body;
    } catch (err) {
      console.log(`Webhook error: ${err.message}`);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }
    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        const paymentId = session.payment_intent; // Retrieve payment ID
        const livemode = session.livemode;
        const name = session.customer_details.name;
        const email = session.customer_details.phone;
        const phone = session.customer_details.email;

        console.log(`Payment ID: ${paymentId}`);
        console.log(`Live Mode: ${livemode}`);
        console.log(`Client name: ${name}`);
        console.log(`Client Phone: ${email}`);
        console.log(`Client Email: ${phone}`);
        break;

      // Add more cases for other events if needed

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    res.status(200).end();
  },
};
