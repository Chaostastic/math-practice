import {randomInt, round, replaceWild, check} from "/util.js";

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

wildCards.mid1 = wildCards.x1 - wildCards.x2
wildCards.mid2 = wildCards.y1 - wildCards.y2
wildCards.mid3 = wildCards.z1 - wildCards.z2
wildCards.mid4 = Math.pow((wildCards.mid1),2)
wildCards.mid5 = Math.pow((wildCards.mid2),2)
wildCards.mid6 = Math.pow((wildCards.mid3),2)
wildCards.mid7 = wildCards.mid4 + wildCards.mid5 + wildCards.mid6
wildCards.answer = round(Math.sqrt(wildCards.mid7), 1)

replaceWild(exercise, wildCards, false)
replaceWild(solution, wildCards, true)
answerSubmit.addEventListener("click", () => check(answerInput, solutionContainer, wildCards))