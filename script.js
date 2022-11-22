const wildCards = {
    x1: 1,
    y1: 2,
    z1: 3,
    x2: -1,
    y2: -2,
    z2: -3,
}

function replaceWild(element) {
    for (const key in wildCards) {
        element.textContent = element.textContent.replace(`{${key}}`, wildCards[key])
    }
}

replaceWild(document.querySelector("#exercise"))