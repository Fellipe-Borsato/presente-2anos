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
    correctIndex: 0
    },
    {
    text: "Qual presente eu te dei no primeiro show que fomos juntos?",
    options: ["Brinco", "Colar", "Chocolate", "Rosa"],
    correctIndex: 3
    },
    {
    text: "Qual é a nosso melhor apelido?",
    options: ["Amor", "Mor", "Amoreca(o)", "Nome no diminutivo"],
    correctIndex: 2
    },
    {
    text: "Quantos dias tem nosso foguinho?",
    options: ["121", "206", "119", "125"],
    correctIndex: 0
    },
    {
    text: "Melhor filme que assitimos Juntos?",
    options: ["Batman", "Anyone but you", "Gente grande 2", "Harry Potter and the Goblet of Fire"],
    correctIndex: 1
    },
    {
    text: "De qual jogo foi a primeira história que te contei?",
    options: ["Elden Ring", "Call of Duty", "FNAF", "Celeste"],
    correctIndex: 2
    },
    {
    text: "Qual é nossa música mais marcante?",
    options: ["Hail to the king", "Lay all your love on me", "Nova era", "Bury the light"],
    correctIndex: 3
    },
    {
    text: "Qual foi nosso primeiro assunto?",
    options: ["Desenho da anya", "Instagram", "Música", "Reencontro TLC"],
    correctIndex: 3
    },
    {
    text: "Qual é nosso sonho?",
    options: ["Ir de bike para a Alemanha", "Se casar", "Pular corda bem rápido", "sonho de padaria"],
    correctIndex: 1
    },
];

let perguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const container = document.getElementById("conteudo");
  const pergunta = perguntas[perguntaAtual];

  let html = `<h2>${pergunta.text}</h2><ul>`;
  
  pergunta.options.forEach((opcao, index) => {
    html += `<li><button onclick="responder(${index})">${opcao}</button></li>`;
  });

  html += "</ul>";
  container.innerHTML = html;
}

function responder(indiceEscolhido) {
  const pergunta = perguntas[perguntaAtual];
  if (indiceEscolhido === pergunta.correctIndex) pontuacao++;
  
  perguntaAtual++;
  
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const container = document.getElementById("conteudo");
  container.innerHTML = `
    <h2>Fim do quiz!</h2>
    <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</p>
    <p>Mas independente disso, eu te amo! 💖</p>
  `;
}

function iniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
}

btnMemoria.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>🧠 Jogo da Memória</h2>
    <p>Jogo da memoória com fotos</p>
  `;
});

btnQuiz.addEventListener('click', iniciarQuiz);

btnCartinha.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>📜 Cartinha Interativa</h2>
    <p>Cartinha hihihi</p>
  `;
});
