function empty() {
    document.getElementById('res').innerHTML = "";
}

function deleteLast() {
    let res = document.getElementById('res');
    res.innerText = res.innerText.slice(0, -1);
}

function append(value) {
    document.getElementById('res').innerText += value;
}

function calculate() {
    let res = document.getElementById('res');
    try {
        res.innerText = eval(res.innerText);
    } catch {
        res.innerText = 'Error';
    }
}