console.log("Success.js is running");

// Function to set text inside the html
const setText = (elementId, text) => {
  const element = document.querySelector(`#${elementId}`);
  element.innerHTML = text;
};

// Get session info from session_id
document.addEventListener("DOMContentLoaded", async () => {
  let urlParams = new URLSearchParams(window.location.search);
  let sessionId = urlParams.get("session_id");

  if (sessionId) {
    const { session } = await fetch(`order-info?session_id=${sessionId}`).then(
      (r) => r.json()
    );

    console.log(`Session Details:`);
    console.log(session);

    console.log(`name: ${session.customer_details.name}`);
    console.log(`phone: ${session.customer_details.phone}`);
    console.log(`email: ${session.customer_details.email}`);
    console.log(`paymentId: ${session.payment_intent}`);

    setText("name", session.customer_details.name);
    setText("phone", session.customer_details.phone);
    setText("email", session.customer_details.email);
    setText("paymentId", session.payment_intent);
  }
});
