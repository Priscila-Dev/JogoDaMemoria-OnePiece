const validarJogador = () => {
    const jogador1 = document.querySelector("#inputJogador1").value.trim();
    const jogador2 = document.querySelector("#inputJogador2").value.trim();
    const isSinglePlayer = document.querySelector("#inputJogador2").classList.contains("hidden");

    const isValidSingle = jogador1.length > 2;
    const isValidMulti = jogador1.length > 2 && jogador2.length > 2;
    const isValid = (isSinglePlayer && isValidSingle) || (!isSinglePlayer && isValidMulti);

    document.querySelectorAll("#nivel").forEach(botao => {
        botao.classList.toggle("disabled", !isValid);
    });

    return isValid;
}

export {validarJogador};