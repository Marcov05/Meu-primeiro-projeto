const botaoMenu = document.getElementsByClassName("estilo");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

botaoMenu.addEventListener("click", toggleMenu);
