const answerInput = document.querySelector("#answer")
const answerSubmit = document.querySelector("#answer-submit")

const wildCards = {
    x1: randomInt(-9, 9),
    y1: randomInt(-9, 9),
    z1: randomInt(-9, 9),
    x2: randomInt(-9, 9),
    y2: randomInt(-9, 9),
    z2: randomInt(-9, 9),
}

const answer = round(Math.sqrt(Math.pow((wildCards.x1-wildCards.x2),2)+Math.pow((wildCards.y1-wildCards.y2),2)+Math.pow((wildCards.z1-wildCards.z2),2)), 1)

function round(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) /  Math.pow(10, decimal)
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function replaceWild(element, wild) {
    for (const key in wild) {
        element.textContent = element.textContent.replace(`{${key}}`, wild[key])
    }
}

function checkAnswer() {
    answerInput.classList.add((+answerInput.value === answer) ? "correct" : "false")
}

replaceWild(document.querySelector("#exercise"), wildCards)
answerSubmit.addEventListener("click", checkAnswer)