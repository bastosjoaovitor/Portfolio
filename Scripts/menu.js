const menu = document.getElementById("menu-mobile");

menu.addEventListener('click', animarMenu);

function animarMenu() {
    menu.classList.toggle('abrir');
}