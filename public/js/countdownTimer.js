(function () {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let nextCourse = "01/02/2024";
  let endMessage = "Nuestra Preventa Termino.";

  const countDown = new Date(nextCourse).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      // Action when date is reached
      if (distance < 0) {
        document.getElementById("countdown-div").style.display = "none";
        clearInterval(x);
      }
      // Seconds
    }, 0);
})();

// Original code before big changes:

// (function () {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   let nextCourse = "01/02/2024";
//   let endMessage = "Nuestra Preventa Termino.";

//   const countDown = new Date(nextCourse).getTime(),
//     x = setInterval(function () {
//       const now = new Date().getTime(),
//         distance = countDown - now;

//       (document.getElementById("days").innerText = Math.floor(distance / day)),
//         (document.getElementById("hours").innerText = Math.floor(
//           (distance % day) / hour
//         )),
//         (document.getElementById("minutes").innerText = Math.floor(
//           (distance % hour) / minute
//         )),
//         (document.getElementById("seconds").innerText = Math.floor(
//           (distance % minute) / second
//         ));

//       // Action when date is reached
//       if (distance < 0) {
//         document.getElementById("index-countdown-headline").innerText =
//           endMessage;
//         document.getElementById("countdown").style.display = "none";
//         document.getElementById("content").style.display = "block";
//         clearInterval(x);
//       }
//       // Seconds
//     }, 0);
// })();
