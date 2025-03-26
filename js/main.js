import * as selecaoPlayer from "./selecaoPlayer.js";
import * as navegacao from "./navegacao.js";
import * as validacao from "./validacao.js";

// Adicionando eventos globais
document.addEventListener("keydown", selecaoPlayer.selecionarPlayer);
document.addEventListener("keydown", navegacao.navegarInputs);
document.addEventListener("keydown", navegacao.navegarBtn);

// Evento para monitorar a digitação nos inputs
document.querySelector("#inputJogador1").addEventListener("input", validacao.validarJogador);
document.querySelector("#inputJogador2").addEventListener("input", validacao.validarJogador);