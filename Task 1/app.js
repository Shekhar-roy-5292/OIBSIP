let currentInput = '';
let currentDisplay = document.getElementById('current-display');
let previousDisplay = document.getElementById('previous-display');
let ans = null;

function appendToDisplay(value) {
    currentInput += value;
    currentDisplay.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentDisplay.value = '';
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            currentDisplay.value = 'Error';
        } else {
            previousDisplay.value = currentInput;
            currentInput = result.toString();
            currentDisplay.value = currentInput;
            ans = result;
        }
    } catch (error) {
        currentDisplay.value = 'Error';
    }
}

function togglePlusMinus() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    currentDisplay.value = currentInput;
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    currentDisplay.value = currentInput;
}

function useAnswer() {
    if (ans !== null) {
        currentInput += ans;
        currentDisplay.value = currentInput;
    }
}
