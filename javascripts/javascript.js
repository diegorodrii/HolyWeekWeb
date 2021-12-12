const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible"); /* Cuando se haga click en navToggle el menú se hará visible*/

  if (navMenu.classList.contains("nav-menu_visible")) { /* Se le cambiará el atributo aplicado al menú. */
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }

});