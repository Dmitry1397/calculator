const output = document.querySelector('#output');

const numbers = document.querySelectorAll('#number');

const symbols = document.querySelectorAll('#symbol');

const equal = document.querySelector('#equal');

const delBtn = document.querySelector('#delete');

const resetBtn = document.querySelector('#reset');

const errorMsg = document.querySelector('#error');

let action;
let a = b = '';
let state = false;

numbers.forEach(element => {
    element.addEventListener('click', () => {
        if (state) {
            b += element.value;
            output.textContent = parseFloat(b);    
        } else {
            output.textContent += element.value;
        }
    })
})

symbols.forEach(element => {
    element.addEventListener('click', () => {
        setDefault(symbols);
        element.classList += ' active';
        action = element.value;
        a = output.textContent;
        state = true;
    })
})

equal.addEventListener('click', () => {
    output.textContent = actionDetect(a, b, action, state);
    if (state) {
        b = '';
    };
})

delBtn.addEventListener('click', () => output.textContent = output.textContent.slice(0, -1));

resetBtn.addEventListener('click', () => {
    output.textContent = '';
    b = '';
    setDefault(symbols);
});

function actionDetect(a, b, action, state) {
    if (action === '-') {
        errorMsg.style.display = 'none';
        state = false;
        return parseFloat(a) - parseFloat(b);
    } else if (action === '+') {
        errorMsg.style.display = 'none';
        state = false;
        return parseFloat(a) + parseFloat(b);
    } else if (action === '*') {
        errorMsg.style.display = 'none';
        state = false;
        return parseFloat(a) * parseFloat(b);
    } else if (action === '/') {
        if (b === '0') {
            errorMsg.style.display = 'block';
            state = true;
            return b;
        } else {
            errorMsg.style.display = 'none';
            state = false;
            return parseFloat(a) / parseFloat(b);
        }
    }
}

function setDefault(array) {
    array.forEach(element => {
        element.classList = 'number-button';
    })
}