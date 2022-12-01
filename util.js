export function round(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) /  Math.pow(10, decimal)
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function replaceWild(element, wild) {
    
    for (const key in wild) {
        let value = wild[key]
        //normal wildcards
        element.textContent = element.textContent.replaceAll(`{${key}}`, value)
        //wildcards that have to be surrounded by brackets if negative
        if (wild[key] < 0) value = `(${wild[key]})`
        element.textContent = element.textContent.replaceAll(`{-b ${key}}`, value)
        //wildcards that require a + prefix if positive
        if (wild[key] >= 0) value = `+${wild[key]}`
        element.textContent = element.textContent.replaceAll(`{-p ${key}}`, value)
    }
}

export function check(inputNode, correctAnswer) {
    const answer = +inputNode.value.replace(",", ".")
    inputNode.classList.add((answer === correctAnswer) ? "correct" : "false")
}