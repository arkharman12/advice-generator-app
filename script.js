const adviceNumber = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")
const diceBtn = document.getElementById("dice-btn")


diceBtn.addEventListener("click", function() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceNumber.innerText = `Advice #${data.slip.id}`
        adviceText.innerText = data.slip.advice
    });
})