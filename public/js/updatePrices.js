// Variables Nivel 1: HomePage
// ***************************
// Individual
let precio_lista_nivel_1_individual = "$1,300";
let precio_descuento_nivel_1_individual = "$650";
let porcentaje_descuento_nivel_1_individual = "-50%";
// Pareja
let precio_lista_nivel_1_pareja = "$2,000";
let precio_descuento_nivel_1_pareja = "$1,000";
let porcentaje_descuento_nivel_1_pareja = "-50%";

// Variables Nivel 2+: Salsa / Bachata
// ***********************************
// Individual
let precio_lista_nivel_2_individual = "$1,300";
let precio_descuento_nivel_2_individual = "$650";
let porcentaje_descuento_nivel_2_individual = "-50%";
// Pareja
let precio_lista_nivel_2_pareja = "$2,000";
let precio_descuento_nivel_2_pareja = "$1,000";
let porcentaje_descuento_nivel_2_pareja = "-50%";

// ****************************************************************************
// ****************************************************************************

// Update function
// ***************
function updateElementById(id, value) {
  var element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  } else {
    console.warn("Element with ID '" + id + "' not found. Skipping.");
  }
}

// Updates
// *******
// Nivel 1: Individual
updateElementById("pl-n1-ind", precio_lista_nivel_1_individual);
updateElementById("pd-n1-ind", precio_descuento_nivel_1_individual);
updateElementById("por-n1-ind", porcentaje_descuento_nivel_1_individual);
// Nivel 1: Pareja
updateElementById("pl-n1-par", precio_lista_nivel_1_pareja);
updateElementById("pd-n1-par", precio_descuento_nivel_1_pareja);
updateElementById("por-n1-par", porcentaje_descuento_nivel_1_pareja);
// Nivel 2+: Individual
updateElementById("pl-n2-ind", precio_lista_nivel_2_individual);
updateElementById("pd-n2-ind", precio_descuento_nivel_2_individual);
updateElementById("por-n2-ind", porcentaje_descuento_nivel_2_individual);
// Nivel 2+: Pareja
updateElementById("pl-n2-par", precio_lista_nivel_2_pareja);
updateElementById("pd-n2-par", precio_descuento_nivel_2_pareja);
updateElementById("por-n2-par", porcentaje_descuento_nivel_2_pareja);

// ****************************************************************************
// ****************************************************************************
