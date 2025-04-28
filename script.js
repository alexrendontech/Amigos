const talkBtn = document.getElementById('talkBtn');
const questionDiv = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const letterDiv = document.getElementById('letter');
const letterText = document.getElementById('letterText');
const bgMusic = document.getElementById('bgMusic');
const endSound = document.getElementById('endSound');

const message = `
Hola,

He estado pensando mucho últimamente y siento que lo mejor es tomar distancia. 
Nuestra amistad significó mucho para mí en su momento, pero siento que nuestras vidas y caminos han cambiado.

Hoy, desde el respeto y el cariño, quiero despedirme como amigo.
No busco conflictos, ni malos sentimientos. Solo busco paz y seguir mi propio camino.

Te deseo todo lo mejor en tu vida.

Adiós.
`;

const shortMessage = `
Entiendo, y respeto tu decisión de no querer saberlo.

De cualquier forma, te deseo lo mejor en tu vida.
Adiós.
`;

// Cuando el usuario toca el botón de hablar
talkBtn.addEventListener('click', () => {
  bgMusic.play().catch(error => {
    console.log('Error al intentar reproducir música:', error);
  });
  talkBtn.classList.add('hidden');
  questionDiv.classList.remove('hidden');
});

yesBtn.addEventListener('click', () => {
  questionDiv.classList.add('hidden');
  letterDiv.classList.remove('hidden');
  typeMessage(message);
});

noBtn.addEventListener('click', () => {
  questionDiv.classList.add('hidden');
  letterDiv.classList.remove('hidden');
  typeMessage(shortMessage);
});

// Efecto máquina de escribir
function typeMessage(text) {
  let index = 0;
  letterText.textContent = '';
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      letterText.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      endSequence();
    }
  }, 50);
}

// Al terminar la carta
function endSequence() {
  endSound.play();
  setTimeout(() => {
    document.querySelector('.container').classList.add('fade-out');
  }, 2000);
}
