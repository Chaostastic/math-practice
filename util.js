export function round(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) /  Math.pow(10, decimal)
}

export function randomInt(min = 0, max = 1, ...illegal) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return (illegal.includes(random)) ? randomInt(...arguments) : random
}

export function replaceWild(element, wild) {
    
    for (const key in wild) {
        //normal wildcards
        const value = wild[key]
        element.textContent = element.textContent.replaceAll(`{${key}}`, value)
        //wildcards that have to be surrounded by brackets if negative
        const valueB = (wild[key] < 0) ? `(${wild[key]})` : wild[key]
        element.textContent = element.textContent.replaceAll(`{-b ${key}}`, valueB)
        //wildcards that include a prefix, wont display at all if 0
        const valueP = (wild[key] > 0) ? `+${wild[key]}` : (wild[key] === 0) ? "" : wild[key]
        element.textContent = element.textContent.replaceAll(`{-p ${key}}`, valueP)
        //wildcards that hide value if 1 or -1
        const valueH = (wild[key] === 1) ? "" : (wild[key] === -1) ? "-" : wild[key]
        element.textContent = element.textContent.replaceAll(`{-h ${key}}`, valueH)
    }
}

export function check(inputNode, correctAnswer) {
    const answer = +inputNode.value.replace(",", ".")
    inputNode.classList.add((answer === correctAnswer) ? "correct" : "false")
}