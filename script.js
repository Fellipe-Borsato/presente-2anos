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
//--------------------------------------------------------------------------------------------

function iniciarJogoMemoria() {
  const imagens = [];
  for (let i = 1; i <= 10; i++) {
    imagens.push(`img/img${i}.jpg`);
  }

  // Duplica e embaralha as imagens
  const cartas = embaralhar([...imagens, ...imagens]);

  conteudo.innerHTML = '<div id="tabuleiro-memoria" class="tabuleiro"></div>';
  const tabuleiro = document.getElementById('tabuleiro-memoria');

  cartas.forEach((src, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.index = index;
    carta.dataset.src = src;
    carta.innerHTML = `
      <img class="frente" src="${src}" />
      <img class="verso" src="img/verso.jpg" />
    `;
    tabuleiro.appendChild(carta);
  });

  configurarEventosMemoria();
}

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function configurarEventosMemoria() {
  let primeira = null;
  let segunda = null;
  let travado = false;

  document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener('click', () => {
      if (travado || carta.classList.contains('virada')) return;

      carta.classList.add('virada');

      if (!primeira) {
        primeira = carta;
      } else {
        segunda = carta;
        travado = true;

        if (primeira.dataset.src === segunda.dataset.src) {
          // Acertou
          primeira = null;
          segunda = null;
          travado = false;
        } else {
          // Errou
          setTimeout(() => {
            primeira.classList.remove('virada');
            segunda.classList.remove('virada');
            primeira = null;
            segunda = null;
            travado = false;
          }, 1000);
        }
      }
    });
  });
}


//--------------------------------------------------------------------------------------------
btnMemoria.addEventListener('click', iniciarJogoMemoria);

btnQuiz.addEventListener('click', iniciarQuiz);

btnCartinha.addEventListener('click', () => {
  conteudo.innerHTML = 
   conteudo.innerHTML = `
    <h2>📜 Cartinha</h2>
    <div id="cartinha" style="text-align: left; margin-top: 20px; font-size: 1.2em;"></div>
    <div id="final-coracao" style="text-align: center; font-size: 2em; margin-top: 20px;"></div>
  `;

  const frases = [
    "Oi amoreca 💖",
    "Hoje completamos 2 anos juntos...",
    "E cada dia ao seu lado é um presente.",
    "Você me faz sorrir nos dias bons e nos dias difíceis também.",
    "Te ver feliz é meu maior objetivo.",
    "Obrigado por me escolher todos os dias.",
    "Por me apoiar, me ouvir, me amar.",
    "Eu quero viver tantos e tantos anos com você ainda.",
    "Com nossas aventuras, filmes, sonhos e até besteiras.",
    "Te amo com todo meu coração. ❤️"
  ];

  const cartinha = document.getElementById("cartinha");
  let fraseIndex = 0;

  function escreverFrase(frase, i = 0) {
    if (i < frase.length) {
      cartinha.innerHTML += frase.charAt(i);
      setTimeout(() => escreverFrase(frase, i + 1), 40);
    } else {
      cartinha.innerHTML += "<br><br>";
      fraseIndex++;
      if (fraseIndex < frases.length) {
        setTimeout(() => escreverFrase(frases[fraseIndex]), 700);
      } else {
        mostrarCoracaoFinal();
      }
    }
  }

  function mostrarCoracaoFinal() {
    const coracao = document.getElementById("final-coracao");
    coracao.innerHTML = "💘";
    setInterval(() => {
      coracao.style.opacity = coracao.style.opacity === "0" ? "1" : "0";
    }, 500);
  }

  escreverFrase(frases[fraseIndex]);
  ;
});
