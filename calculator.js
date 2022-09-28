const output = document.querySelector('#output');

const numbers = document.querySelectorAll('#number');

const symbols = document.querySelectorAll('#symbol');

const equal = document.querySelector('#equal');

const delBtn = document.querySelector('#delete');

const resetBtn = document.querySelector('#reset');

const errorMsg = document.querySelector('#error');

let a,b, action;

numbers.forEach(element => {
    element.addEventListener('click', () => {
        output.textContent += element.value;
    })
})

symbols.forEach(element => {
    element.addEventListener('click', () => {
        action = element.value;
        a = output.textContent;
        output.textContent = '';
    })
})

equal.addEventListener('click', () => {
    b = output.textContent;
    output.textContent = actionDetect(a, b, action);
})

delBtn.addEventListener('click', () => output.textContent = output.textContent.slice(0, -1));

resetBtn.addEventListener('click', () => output.textContent = '');

function actionDetect(a, b, action) {
    if (action === '-') {
        errorMsg.style.display = 'none';
        return parseFloat(a) - parseFloat(b);
    } else if (action === '+') {
        errorMsg.style.display = 'none';
        return parseFloat(a) + parseFloat(b);
    } else if (action === '*') {
        errorMsg.style.display = 'none';
        return parseFloat(a) * parseFloat(b);
    } else if (action === '/') {
        if (b === '0') {
            errorMsg.style.display = 'block';
            return b;
        } else {
            errorMsg.style.display = 'none';
            return parseFloat(a) / parseFloat(b);
        }
    }
}