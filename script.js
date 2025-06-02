const conteudo = document.getElementById('conteudo');
const btnMemoria = document.getElementById('btn-memoria');
const btnQuiz = document.getElementById('btn-quiz');
const btnCartinha = document.getElementById('btn-cartinha');

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
