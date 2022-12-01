import {randomInt, replaceWild, check} from "../../util.js";

const answerInput = document.querySelector(".answer")
const answerSubmit = document.querySelector("#answer-submit")
const solutionContainer = document.querySelector("#solution-container")
const solution = document.querySelector("#solution")
const exercise = document.querySelector("#exercise")

const solutionTeX = [
    "\\({-h a}x{-p b}={-h mid1}x{-p mid2}\\qquad\\)",
    "\\({-h a}x{-p mid3}x = {mid4}{-p mid2}\\qquad\\)",
    "\\({-h mid5}x = {mid6} |:{-b mid5}\\qquad\\)",
    "\\(x = {answer}\\)"
]

const wildCards = {
    c: randomInt(-5, 5, 1, 0),
    d: randomInt(-5, 5, 0),
    e: randomInt(-5, 5, 0),
    answer: randomInt(-5, 5),
}

wildCards.mid1 = wildCards.d * wildCards.c
wildCards.mid2 = wildCards.e * wildCards.c
wildCards.a = (randomInt(0, 3)) ? randomInt(-10, 10) : wildCards.mid1
wildCards.mid3 = wildCards.mid1 * -1
wildCards.mid5 = wildCards.mid3 + wildCards.a
wildCards.answer += (wildCards.mid5 % 2 === 0 && randomInt()) ? 0.5 : 0
wildCards.mid6 = (wildCards.mid5 || randomInt()) ? wildCards.mid5 * wildCards.answer : randomInt(-5, 5)
wildCards.mid4 = wildCards.mid6 - wildCards.mid2
wildCards.b = wildCards.mid4 * -1

if (wildCards.mid5 === 1) {
    solutionTeX.splice(2,1)
} else if (wildCards.mid5 === 0) {
    solutionTeX[2] = "\\({-h mid5} = {mid6}\\qquad\\)"
    if (wildCards.mid6 === 0) {
        solutionTeX[3] = "\\(x \\in \\mathbb{R}\\)"
        wildCards.answer = "R"
    } else {
        solutionTeX[3] = "\\(x \\in \\varnothing\\)"
        wildCards.answer = "-"
    }
}

solution.textContent = solutionTeX.join(" ")

replaceWild(exercise, wildCards)
replaceWild(solution, wildCards)
answerSubmit.addEventListener("click", () => {
    check(answerInput, wildCards.answer)
    solutionContainer.classList.remove("hidden")
})