/*
    Template Name: Salsa Candela - Dance Academy
    Description: Vanilla JavaScript version - jQuery removed
    Version: 2.0
*/

document.addEventListener('DOMContentLoaded', function() {
  "use strict";

  /*------------------------------------
    01. Sticky Menu (Vanilla JS)
  -------------------------------------- */
  const headerSticky = document.querySelector('.header-sticky');
  
  if (headerSticky) {
    window.addEventListener('scroll', function() {
      const scroll = window.pageYOffset;
      if (scroll < 245) {
        headerSticky.classList.remove('sticky');
      } else {
        headerSticky.classList.add('sticky');
      }
    });
  }
});
