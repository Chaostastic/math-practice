export function round(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) /  Math.pow(10, decimal)
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function replaceWild(element, wild) {
    
    for (const key in wild) {
        //normal wildcards
        const value = wild[key]
        element.textContent = element.textContent.replaceAll(`{${key}}`, value)
        //wildcards that have to be surrounded by brackets if negative
        const valueB = (wild[key] < 0) ? `(${wild[key]})` : wild[key]
        element.textContent = element.textContent.replaceAll(`{-b ${key}}`, valueB)
        //wildcards that require a + prefix if positive
        const valueP = (wild[key] >= 0) ? `+${wild[key]}` : wild[key]
        element.textContent = element.textContent.replaceAll(`{-p ${key}}`, valueP)
    }
}

export function check(inputNode, correctAnswer) {
    const answer = +inputNode.value.replace(",", ".")
    inputNode.classList.add((answer === correctAnswer) ? "correct" : "false")
}