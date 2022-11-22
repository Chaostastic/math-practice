const answerInput = document.querySelector("#answer")
const answerSubmit = document.querySelector("#answer-submit")
const solutionContainer = document.querySelector("#solution-container")
const solution = document.querySelector("#solution")
const exercise = document.querySelector("#exercise")

const wildCards = {
    x1: randomInt(-9, 9),
    y1: randomInt(-9, 9),
    z1: randomInt(-9, 9),
    x2: randomInt(-9, 9),
    y2: randomInt(-9, 9),
    z2: randomInt(-9, 9),
}

wildCards.midAnswer1 = wildCards.x1 - wildCards.x2
wildCards.midAnswer2 = wildCards.y1 - wildCards.y2
wildCards.midAnswer3 = wildCards.z1 - wildCards.z2
wildCards.midAnswer4 = Math.pow((wildCards.midAnswer1),2)
wildCards.midAnswer5 = Math.pow((wildCards.midAnswer2),2)
wildCards.midAnswer6 = Math.pow((wildCards.midAnswer3),2)
wildCards.midAnswer7 = wildCards.midAnswer4 + wildCards.midAnswer5 + wildCards.midAnswer6
wildCards.answer = round(Math.sqrt(wildCards.midAnswer7), 1)

function round(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) /  Math.pow(10, decimal)
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function replaceWild(element, wild, surroundNegative) {
    for (const key in wild) {
        //normal wildcards
        element.textContent = element.textContent.replace(`{${key}}`, wild[key])
        //wildcards that have to be surrounded by brackets if negative
        const value = (wild[key] < 0) ? `(${wild[key]})` : wild[key]
        element.textContent = element.textContent.replace(`{(${key})}`, value)
    }
}

function checkAnswer() {
    answerInput.classList.add((+answerInput.value === wildCards.answer) ? "correct" : "false")
    solutionContainer.classList.remove("hidden")
}

replaceWild(exercise, wildCards, false)
replaceWild(solution, wildCards, true)
answerSubmit.addEventListener("click", checkAnswer)