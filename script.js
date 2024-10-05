function insert(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

function sqrt() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(eval(currentValue));
}

function square() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.pow(eval(currentValue), 2);
}

function sin() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.sin(eval(currentValue));
}

function cos() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.cos(eval(currentValue));
}

function tan() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.tan(eval(currentValue));
}
