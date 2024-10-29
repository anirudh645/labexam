function clearScreen() {
    document.getElementById('screen').innerText = '';
}

function deleteLast() {
    let screen = document.getElementById('screen');
    screen.innerText = screen.innerText.slice(0, -1);
}

function appendValue(value) {
    document.getElementById('screen').innerText += value;
}

function calculate() {
    let screen = document.getElementById('screen');
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = 'Error';
    }
}