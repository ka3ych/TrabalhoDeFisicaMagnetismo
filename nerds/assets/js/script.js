//animação da máquina de escrever
function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textArray.forEach(function (letra, i) {
        setTimeout(function() {
            element.innerHTML += letra;
        }, 150 * i)
    });
}
const titulo = document.getElementById('titulo');
typeWrite(titulo);

// botão de menu (responsivo)
const btnMenu = document.getElementById('btnMenu');

function toggleMenu() {
    const nav = document.getElementById('nav-itens');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);