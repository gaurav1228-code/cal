function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLastChar() {
    const display = document.getElementsByName('display')[0];
    display.value = display.value.toString().slice(0, -1);
}

function appendCharacter(char) {
    document.getElementsByName('display')[0].value += char;
}

function calculateResult() {
    const display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}
