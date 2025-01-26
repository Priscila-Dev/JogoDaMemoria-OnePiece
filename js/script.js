const modal = document.querySelector('#modal');
const modalPlayer = document.querySelector('#modalPlayer');
const modalLogin = document.querySelector('#modalLogin');
const options = document.querySelectorAll('#option')
const select = document.querySelectorAll('#select');
const inputJogador1 = document.querySelector('#inputJogador1');
const inputJogador2 = document.querySelector('#inputJogador2');
const player = document.querySelectorAll('#player');

let selectedIndex = 0;
let selectIndex = 1;

const changeSelection = (direction) => {

    options[selectedIndex].classList.remove('selected');
    selectedIndex = (selectedIndex + direction + options.length) % options.length;
    options[selectedIndex].classList.add('selected');

    select[selectIndex].classList.remove('hidden');
    selectIndex = (selectIndex + direction + select.length) % select.length;
    select[selectIndex].classList.add('hidden');

}

const showInput = () => {
    modalPlayer.classList.remove('active');
    modalLogin.classList.add('active');

    if (selectedIndex === 0) {
        inputJogador2.classList.add('hidden');
        inputJogador1.focus();
    } else {
        inputJogador1.placeholder = "Jogador 1";
        inputJogador2.placeholder = "Jogador 2";
        inputJogador1.focus();
    }
}

// Evento para capturar teclas pressionadas
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') changeSelection(1);
    if (event.key === 'ArrowUp') changeSelection(-1);
    if (event.key === 'Enter') showInput();
  });

options[selectedIndex].classList.add('selected');
