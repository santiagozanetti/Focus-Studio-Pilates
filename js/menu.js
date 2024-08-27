const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");

// Alternar la clase activa al hacer clic en el icono de hamburguesa
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); // Esto asegura que el icono de la X aparezca
});

// Cerrar el menú cuando se hace clic en un enlace
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active"); // Asegura que la hamburguesa vuelva
  });
});
