const wildCards = {
    x1: randomInt(-9, 9),
    y1: randomInt(-9, 9),
    z1: randomInt(-9, 9),
    x2: randomInt(-9, 9),
    y2: randomInt(-9, 9),
    z2: randomInt(-9, 9),
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function replaceWild(element) {
    for (const key in wildCards) {
        element.textContent = element.textContent.replace(`{${key}}`, wildCards[key])
    }
}

replaceWild(document.querySelector("#exercise"))