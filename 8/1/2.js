function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function replaceWild(element, wild) {
    for (const key in wild) {
        //normal wildcards
        element.textContent = element.textContent.replace(`{${key}}`, wild[key])
        //wildcards that have to be surrounded by brackets if negative
        const value = (wild[key] < 0) ? `(${wild[key]})` : wild[key]
        element.textContent = element.textContent.replace(`{-b ${key}}`, value)
    }
}

function check(inputNode, answer) {
    inputNode.classList.add((+inputNode.value === answer) ? "correct" : "false")
}

const answerInputs = document.querySelectorAll(".answer")
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

wildCards.mid1 = wildCards.x1 + wildCards.x2
wildCards.mid2 = wildCards.y1 + wildCards.y2
wildCards.mid3 = wildCards.z1 + wildCards.z2
wildCards.answer1 = wildCards.mid1 / 2
wildCards.answer2 = wildCards.mid2 / 2
wildCards.answer3 = wildCards.mid3 / 2

replaceWild(exercise, wildCards)
replaceWild(solution, wildCards)
answerSubmit.addEventListener("click", () => {
    answerInputs.forEach((input) => {
        check(input, wildCards["answer" + input.id])
    })
    solutionContainer.classList.remove("hidden")
})