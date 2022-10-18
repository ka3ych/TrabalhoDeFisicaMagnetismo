//animação da máquina de escrever
function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textArray.forEach(function (letra, i) {
        setTimeout(function() {
            element.innerHTML += letra;
        }, 250 * i)
    });
}
const titulo = document.getElementById('titulo');
typeWrite(titulo);

// nav animation
const btnMenu = document.getElementById('btnMenu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

const navBtn = document.getElementById('navBtn');
function remover() {
    const nav =  document.getElementById('nav');
    nav.classList.remove('active')
}
navBtn.addEventListener('click', remover)