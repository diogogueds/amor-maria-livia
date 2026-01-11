const botao = document.getElementById("botao");
const entrada = document.getElementById("entrada");
const conteudo = document.getElementById("conteudo");
const musica = document.getElementById("musica");
const senhaInput = document.getElementById("senha");
const ajuda = document.getElementById("ajuda");

let vezesMouse = 0;
const limite = 7;
const senhaCorreta = "diogosempretemrazao";
let liberado = false;

// BOTÃO FOGE (contador escondido)
botao.addEventListener("mouseover", () => {
    if (!liberado) {
        vezesMouse++;

        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 60);
        botao.style.left = `${x}px`;
        botao.style.top = `${y}px`;

        // quando atingir 7 vezes, libera a ajuda
        if (vezesMouse >= limite) {
            liberado = true;
            botao.style.position = "static";

            ajuda.classList.remove("oculto");
            senhaInput.classList.remove("oculto");
        }
    }
});

// VERIFICA SENHA
senhaInput.addEventListener("keyup", () => {
    if (senhaInput.value === senhaCorreta) {
        abrirConteudo();
    }
});

// ABRE O SLIDESHOW
function abrirConteudo() {
    entrada.style.display = "none";
    conteudo.classList.remove("oculto");
    musica.play();
    slideshow();
    setInterval(slideshow, 4000);
}


