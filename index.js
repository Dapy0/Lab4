const display = document.getElementById('display');

function appendValue(v) {
    if (display.value === 'Error') display.value = '';
    display.value += v;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === 'Error') display.value = ''; else display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!display.value.trim()) return;
        display.value = eval(display.value) || '';
    } catch {
        display.value = 'Error';
    }
}
