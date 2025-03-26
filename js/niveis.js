import * as navegar from './navegacao.js';

const nivelDificuldade = () => {
    switch (navegar.nivelIndex) {
        case 0:
            alert("Nivel FÁCIL!");
            window.location.href = "/pages/facil.html";
            break;
        case 1:
            alert("Nivel MÉDIO!");
            //window.location.href = "/pages/medio.html";
            break;
        case 2:
            alert("Nivel DIFÍCIL!");
            //window.location.href = "/pages/dificil.html";
            break;
    }
}

export {nivelDificuldade};