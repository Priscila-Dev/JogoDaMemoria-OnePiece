import * as validar from './validacao.js';
import * as nivel from './niveis.js';

const niveis = document.querySelectorAll("#nivel");
const selectNivel = document.querySelectorAll('#selectNivel');
const inputJogador = [inputJogador1, inputJogador2];
let nivelIndex = 0;

const navegarInputs = (event) => {
    const elementoAtivo = document.activeElement;
    const indexAtual = inputJogador.indexOf(elementoAtivo);

    if (event.key === "ArrowDown") {
        const proximoIndex = (indexAtual + 1) % inputJogador.length;
        inputJogador[proximoIndex].focus();
    } else if (event.key === "ArrowUp") {
        const anteriorIndex = (indexAtual - 1 + inputJogador.length) % inputJogador.length;
        inputJogador[anteriorIndex].focus();
    }
}

const navegarBtn = (event) => {
    if (!validar.validarJogador()) return;

    if (event.key === "ArrowRight") {
        nivelIndex = (nivelIndex + 1) % niveis.length;
        alterarSelecaoBtn();
    }
    if (event.key === "ArrowLeft") {
        nivelIndex = (nivelIndex - 1 + niveis.length) % niveis.length;
        alterarSelecaoBtn();
    }
    if (event.key === "Enter") {
        nivel.nivelDificuldade();
    }
}

const alterarSelecaoBtn = () => {
    niveis.forEach((nivel, index) => {
        nivel.classList.toggle("selected", index === nivelIndex);
    });

    selectNivel.forEach((selectNivel, index) => {
        selectNivel.classList.toggle('hidden', index !== nivelIndex);
    });
}

export {navegarInputs, navegarBtn, nivelIndex};