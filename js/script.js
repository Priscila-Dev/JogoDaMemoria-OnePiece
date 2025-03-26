const modal = document.querySelector('#modal');
const modalPlayer = document.querySelector('#modalPlayer');
const modalLogin = document.querySelector('#modalLogin');
const options = document.querySelectorAll('#option')
const select = document.querySelectorAll('#select');
const selectNivel = document.querySelectorAll('#selectNivel');
const inputJogador1 = document.querySelector('#inputJogador1');
const inputJogador2 = document.querySelector('#inputJogador2');
const player = document.querySelectorAll('#player');
const niveis = document.querySelectorAll('#nivel');

let selectedIndex = 0;
let nivelIndex = 0;
let inputJogador = [inputJogador1, inputJogador2];
let isSinglePlayer = true; // Define se é single ou multiplayer

const alterarSelecao = () => {

    options.forEach((option, index) => {
        option.classList.toggle('selected', index === selectedIndex);
    });

    select.forEach((select, index) => {
        select.classList.toggle('hidden', index !== selectedIndex);
    });
}

const alterarSelecaoBtn = () => {
    niveis.forEach((nivel, index) => {
        nivel.classList.toggle('selected', index === nivelIndex);
    });

    selectNivel.forEach((selectNivel, index) => {
        selectNivel.classList.toggle('hidden', index !== nivelIndex);
    });
}

const selecionarPlayer = (event) => {
    if (!modalPlayer || !modalPlayer.classList.contains('active')) {
        return; // Sai da função se o menu não estiver visível
    }

    if (event.key === 'ArrowDown') {
        selectedIndex = (selectedIndex + 1) % options.length;
        alterarSelecao();
    }
    if (event.key === 'ArrowUp') {
        selectedIndex = (selectedIndex - 1 + options.length) % options.length;
        alterarSelecao();
    }
    if (event.key === 'Enter') {
        mostrarInput();
    }
}

const navegarInputs = (event) => {
    const elementoAtivo = document.activeElement;
    const indexAtual = inputJogador.indexOf(elementoAtivo);

    if (event.key === 'ArrowDown') {
        const proximoIndex = (indexAtual + 1) % inputJogador.length;
        inputJogador[proximoIndex].focus();
    } else if (event.key === 'ArrowUp') {
        const anteriorIndex = (indexAtual - 1 + inputJogador.length) % inputJogador.length;
        inputJogador[anteriorIndex].focus();
    }
}

const mostrarInput = () => {
    modalPlayer.classList.remove('active');
    modalLogin.classList.add('active');

    // Atualiza a variável para indicar se é single ou multiplayer
    isSinglePlayer = (selectedIndex === 0);

    if (isSinglePlayer) {
        inputJogador2.classList.add('hidden');
        inputJogador1.focus();
    } else {
        inputJogador1.placeholder = "Jogador 1";
        inputJogador2.placeholder = "Jogador 2";
        inputJogador1.focus();
    }
}

// Função de validação dos nomes
const validarJogador = () => {
    const jogador1 = inputJogador1.value.trim();
    const jogador2 = inputJogador2.value.trim();

    // Regras de validação
    const isValidSingle = jogador1.length >= 3; // Para 1 jogador
    const isValidMulti = jogador1.length >= 3 && jogador2.length >= 3; // Para 2 jogadores
    const isValid = isSinglePlayer ? isValidSingle : isValidMulti;

    // Adiciona ou remove a classe 'disabled' nos spans
    niveis.forEach(botao => {
        botao.classList.toggle("disabled", !isValid);
    });

    return isValid;
};

// Função de navegação

const navegarBtn = (event) => {
    if (!validarJogador()) return; // Se não for válido, interrompe a função

    if (event.key === 'ArrowRight') {
        nivelIndex = (nivelIndex + 1) % niveis.length;
        alterarSelecaoBtn();
    }
    if (event.key === 'ArrowLeft') {
        nivelIndex = (nivelIndex - 1 + niveis.length) % niveis.length;
        alterarSelecaoBtn();
    }
    if (event.key === 'Enter') {
        nivelDificuldade();
    }
}

const nivelDificuldade = () => {
    switch (nivelIndex) {
        case 0:
            alert("Nivel FÁCIL!");
            //window.location.href = "facil.html";
            break;
        case 1:
            alert("Nivel MÉDIO!");
            //window.location.href = "medio.html";
            break;
        case 2:
            alert("Nivel DIFÍCIL!");
            //window.location.href = "dificil.html";
            break;
    }
}

document.addEventListener('keydown', selecionarPlayer);
document.addEventListener('keydown', navegarInputs);
document.addEventListener('keydown', navegarBtn);

// Evento para monitorar a digitação nos inputs
inputJogador1.addEventListener("input", validarJogador);
inputJogador2.addEventListener("input", validarJogador);
