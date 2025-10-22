const musica = document.getElementById('musica');

window.addEventListener('load', () => {
  const playPromise = musica.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.body.addEventListener('click', () => {
        musica.muted = false;
        musica.play();
      }, { once: true });
    });
  }
});


function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);
const botao = document.getElementById('botaoSurpresa');
const surpresa = document.getElementById('surpresa');

botao.addEventListener('click', () => {
  surpresa.classList.toggle('escondida');
});
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.textContent = '✨';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.getElementById('hearts').appendChild(star);
  setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 400);
