const conteudo = document.getElementById('conteudo');
const btnMemoria = document.getElementById('btn-memoria');
const btnQuiz = document.getElementById('btn-quiz');
const btnCartinha = document.getElementById('btn-cartinha');

const perguntas = [
    {
    text: "Qual é a nossa data de aniversário de namoro?",
    options: ["14 de fevereiro", "16 de junho", "12 de junho", "25 de dezembro"],
    correctIndex: 1
    },
    {
    text: "Qual foi nossa primeira série?",
    options: ["Cyberpunk", "JoJo's", "Jujutsu Kaisen", "Shingeki"],
    correctIndex: 1
    },
    {
    text: "Qual presente eu te dei no primeiro show que fomos juntos?",
    options: ["Brinco", "Colar", "Chocolate", "Rosa"],
    correctIndex: 1
    },
    {
    text: "Qual é a nosso melhor apelido?",
    options: ["Amor", "Mor", "Amoreca(o)", "Nome no diminutivo"],
    correctIndex: 1
    },
    {
    text: "Quantos dias tem nosso foguinho?",
    options: ["121", "206", "119", "125"],
    correctIndex: 1
    },
    {
    text: "Melhor filme que assitimos Juntos?",
    options: ["Batman", "Anyone but you", "Gente grande 2", "Harry Potter and the Goblet of Fire"],
    correctIndex: 1
    },
    {
    text: "De qual jogo foi a primeira história que te contei?",
    options: ["Elden Ring", "Call of Duty", "FNAF", "Celeste"],
    correctIndex: 1
    },
    {
    text: "Qual é nossa música mais marcante?",
    options: ["Hail to the king", "Lay all your love on me", "Nova era", "Bury the light"],
    correctIndex: 1
    },
    {
    text: "Qual foi nosso primeiro assunto?",
    options: ["Desenho da anya", "Instagram", "Música", "Reencontro TLC"],
    correctIndex: 1
    },
    {
    text: "Qual é nosso sonho?",
    options: ["Ir de bike para a Alemanha", "Se casar", "Pular corda bem rápido", "sonho de padaria"],
    correctIndex: 1
    },
];


btnMemoria.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>🧠 Jogo da Memória</h2>
    <p>Em breve aqui vai um jogo com fotos e corações para você encontrar os pares! ❤️</p>
  `;
});

btnQuiz.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>❓ Quiz do Amor</h2>
    <p>Logo teremos perguntas divertidas sobre a nossa história! 😍</p>
  `;
});

btnCartinha.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>📜 Cartinha Interativa</h2>
    <p>Um texto especial com animações românticas vai aparecer aqui! 💖</p>
  `;
});
