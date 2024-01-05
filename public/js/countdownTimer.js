(function () {
  let nextCourseDate = "01/06/2024";

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDown = new Date(nextCourseDate).getTime(),
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

      // Action when date is reached. Eliminate discount.
      if (distance < 0) {
        document.getElementById("countdown-div").style.display = "none";

        document.getElementById(
          "descuento-niv-1-individual-porcentaje"
        ).style.display = "none";

        document.getElementById(
          "descuento-niv-1-pareja-porcentaje"
        ).style.display = "none";

        document.getElementById(
          "precio-original-niv-1-individual"
        ).style.display = "none";

        document.getElementById("precio-original-niv-1-pareja").style.display =
          "none";

        document.getElementById("precio-niv-1-individual").innerText =
          "$ 1,300";

        document.getElementById("precio-niv-1-pareja").innerText = "$ 2,000";

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
