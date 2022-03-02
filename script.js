const adviceNumber = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")
const diceBtn = document.getElementById("dice-btn")

diceBtn.addEventListener("click", getAdvice)

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
    const data = await response.json()
    const { id, advice} = data.slip
    
    adviceNumber.innerText = `Advice #${id}`
    adviceText.innerText = advice
}

window.onload = function() {
    getAdvice()
}