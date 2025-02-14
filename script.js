const messages = [
    "Estas segura?",
    "Realmente segura??",
    "Pero de verdad estas segura?",
    "Pookie por favor...",
    "Piensatelo!",
    "Si dices que no estare muy triste...",
    "Estare muy triste...",
    "Estare muy pero muy pero muy triste...",
    "Esta bien dejare de preguntar...",
    "!Es broma, di que si, porfavor ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}