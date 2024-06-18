// Self-invoking function
(function () {
  // Next course date (mm/dd/yyyy)
  let inicioDeCurso = "06/29/2024";

  // Time units
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Get countdown time
  const countDown = new Date(inicioDeCurso).getTime();

  // Update the countdown every second
  const intervalId = setInterval(function () {
    // Get time in milliseconds
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDown - now;

    // Update the HTML
    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    // Action when countdown reaches zero
    if (distance < 0) {
      // Hide the countdown display
      document.getElementById("countdown-div").style.display = "none";

      // Stop the interval to avoid unnecessary updates
      clearInterval(intervalId);
    }
  }, 1000); // The interval is set to 1000 milliseconds (1 second)
})();
