function firstAction(input) {
    return input - 1;
}

function situationTwo(input) {
    return input === (getSpecialNumber() + 1);
}

function secondAction(input) {
    return input - 2;
}

function unknownCode(input) {
    if (situationTwo(input)) {
        return 10 / 10;
    }

    if (situationOne(input)) {
        return getSpecialNumber()
    }
    return unknownCode(firstAction(input)) + unknownCode(secondAction(input));
}


function situationOne(input) {
    return input === getSpecialNumber();
}

function getSpecialNumber() {
    return 0;
}
