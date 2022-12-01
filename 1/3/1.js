import {randomInt, round, replaceWild, check} from "../../util.js";

const answerInput = document.querySelector(".answer")
const answerSubmit = document.querySelector("#answer-submit")
const solutionContainer = document.querySelector("#solution-container")
const solution = document.querySelector("#solution")
const exercise = document.querySelector("#exercise")

const wildCards = {
    a: randomInt(-5, 5) * 2,
    b: randomInt(-10, 10),
    answer: randomInt(-9, 9) / 2
}

wildCards.mid1 = wildCards.b * -1
wildCards.mid2 = wildCards.a * wildCards.answer
wildCards.c = wildCards.mid2 - wildCards.mid1

replaceWild(exercise, wildCards)
replaceWild(solution, wildCards)
answerSubmit.addEventListener("click", () => {
    check(answerInput, wildCards.answer)
    solutionContainer.classList.remove("hidden")
})