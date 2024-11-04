let score = 0;

const targetButton = document.getElementById("target-button");
const scoreDisplay = document.getElementById("score");

function moveButton() {
    const x = Math.floor(Math.random() * (window.innerWidth - targetButton.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - targetButton.offsetHeight));
    targetButton.style.left = ${x}px;
    targetButton.style.top = ${y}px;
}

targetButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveButton();
});

// Inicializa o botão em uma posição aleatória
moveButton();
