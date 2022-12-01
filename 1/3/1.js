import {randomInt, replaceWild, check} from "../../util.js";

const answerInput = document.querySelector(".answer")
const answerSubmit = document.querySelector("#answer-submit")
const solutionContainer = document.querySelector("#solution-container")
const solution = document.querySelector("#solution")
const exercise = document.querySelector("#exercise")

const wildCards = {
    a: randomInt(-10, 10, 0),
    b: randomInt(-10, 10),
    answer: randomInt(-5, 5),
}

wildCards.mid1 = wildCards.b * -1
wildCards.answer += (wildCards.a % 2 === 0 && randomInt() === 1) ? 0.5 : 0
wildCards.mid2 = wildCards.a * wildCards.answer
wildCards.c = wildCards.mid2 - wildCards.mid1

replaceWild(exercise, wildCards)
replaceWild(solution, wildCards)
answerSubmit.addEventListener("click", () => {
    check(answerInput, wildCards.answer)
    solutionContainer.classList.remove("hidden")
})