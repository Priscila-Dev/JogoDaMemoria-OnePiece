const placarHTML = `
<header class="placar">
    <section class="singlePlayer" id="singlePlayer">
        <section class="box-jogador" id="boxJogador1">
            <span class="jogador" id="jogador1">JOGADOR</span>
        </section>
        <section class="tempo">
            <span class="tempo" id="tempo">00</span>
        </section>
    </section>

    <section class="multiplayer hidden" id="multiplayer">
        <section class="box-jogador" id="boxJogador1">
            <span class="jogador" id="jogador1">JOGADOR 1</span>
            <span class="pontos" id="pontos1">00</span>
        </section>
        <section class="box-jogador" id="boxJogador2">
            <span class="jogador" id="jogador2">JOGADOR 2</span>
            <span class="pontos" id="pontos2">00</span>
        </section>
    </section>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {

    const cenario = document.querySelector("#cenario");
    if (cenario) {
        cenario.insertAdjacentHTML("afterbegin", placarHTML);
    }
});
