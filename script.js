const fotos = [
    "WhatsApp Image 2025-12-29 at 21.26.55.jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.55 (1).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.55 (2).jpeg",

    "WhatsApp Image 2025-12-29 at 21.26.56.jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.56 (1).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.56 (2).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.56 (3).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.56 (4).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.56 (5).jpeg",

    "WhatsApp Image 2025-12-29 at 21.26.57.jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (1).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (2).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (3).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (4).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (5).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (6).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (7).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.57 (8).jpeg",

    "WhatsApp Image 2025-12-29 at 21.26.58.jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (1).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (2).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (3).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (4).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (5).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (6).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (7).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (8).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (9).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (10).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (11).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (12).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (13).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (14).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (15).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (16).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (17).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (18).jpeg",
    "WhatsApp Image 2025-12-29 at 21.26.58 (19).jpeg"
];

const mensagens = [
    "Maria Lívia, você é o amor da minha vida 💖",
    "Cada foto sua faz meu coração sorrir ✨",
    "Meu mundo é mais bonito com você ❤️",
    "Você é meu sonho realizado 🌹",
    "Te amar é eterno 💞",
    "Meu coração sempre será seu 💓",
    "Sempre você 💘"
];

let indice = 0;

function slideshow() {
    const foto = document.getElementById("foto");
    const mensagem = document.getElementById("mensagem");

    foto.classList.remove("fade");
    void foto.offsetWidth;

    foto.src = fotos[indice];
    mensagem.innerText = mensagens[indice % mensagens.length];

    foto.classList.add("fade");

    indice = (indice + 1) % fotos.length;
}

slideshow();
setInterval(slideshow, 4000);
