const modalPlayer = document.querySelector("#modalPlayer");
const modalLogin = document.querySelector("#modalLogin");
const options = document.querySelectorAll("#option");
const select = document.querySelectorAll("#select");

let selectedIndex = 0;
let isSinglePlayer = true;

const selecionarPlayer = (event) => {
    if (!modalPlayer.classList.contains("active")) return;

    if (event.key === "ArrowDown") {
        selectedIndex = (selectedIndex + 1) % options.length;
        alterarSelecao();
    }
    if (event.key === "ArrowUp") {
        selectedIndex = (selectedIndex - 1 + options.length) % options.length;
        alterarSelecao();
    }
    if (event.key === "Enter") {
        mostrarInput();
    }
}

const alterarSelecao = () => {
    options.forEach((option, index) => {
        option.classList.toggle("selected", index === selectedIndex);
    });

    select.forEach((select, index) => {
        select.classList.toggle("hidden", index !== selectedIndex);
    });
};

const mostrarInput = () => {
    modalPlayer.classList.remove("active");
    modalLogin.classList.add("active");

    isSinglePlayer = selectedIndex === 0;

    const inputJogador2 = document.querySelector("#inputJogador2");
    if (isSinglePlayer) {
        inputJogador2.classList.add("hidden");
        inputJogador1.focus();
    } else {
        document.querySelector("#inputJogador1").placeholder = "Jogador 1";
        inputJogador2.placeholder = "Jogador 2";
        inputJogador1.focus();
    }
}

export {selecionarPlayer, mostrarInput};