const bigScreenEl = document.querySelector('.js-big-screen');
const smallScreenEl = document.querySelector('.js-small-screen');
const numbersEl = document.querySelectorAll('.numbers');
const buttonsEl = document.querySelectorAll('.js-buttons-row');
const plusButtonEl = document.querySelector('.js-plus-button');
const minusButtonEl = document.querySelector('.js-minus-button');
const timesButtonEl = document.querySelector('.js-times-button');
const divideButtonEl = document.querySelector('.js-divide-button');
const deleteButtonEl = document.querySelector('.js-delete-button');
const equalButtonEl = document.querySelector('.js-equal-button');
const decimalButtonEl = document.querySelector('.js-decimal-button');
const moduloButtonEl = document.querySelector('.js-modulo-button');

let operatorUsed = false;
let operand;
let numberStore;
let numberStore2;

let calculatorState = false;
bigScreenEl.textContent = '0';


numbersEl.forEach(button => {
  button.addEventListener('click', () => {
    if (!calculatorState) {
      bigScreenEl.textContent = '';
      calculatorState = true;
    }
    if (operatorUsed === true) {
      bigScreenEl.textContent = '';
      operatorUsed = false;
    }
    const buttonText = button.textContent
    bigScreenEl.textContent += buttonText;
  });
})

decimalButtonEl.addEventListener('click', () => {
  const buttonText = decimalButtonEl.textContent
  bigScreenEl.textContent += buttonText;
});

function addition() {
  plusButtonEl.addEventListener('click', () => {
    if (!operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '+') {
          numberStore = Number(numberStore) + Number(bigScreenEl.textContent);
        } else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = numberStore + ' + ';
        bigScreenEl.textContent = numberStore;
        operand = '+';
      }
      operatorUsed = true;
    }
  });
}

function subtraction() {
  minusButtonEl.addEventListener('click', () => {
    if (!operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '-') {
          numberStore = Number(numberStore) - Number(bigScreenEl.textContent);
        } else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = numberStore + ' - ';
        bigScreenEl.textContent = numberStore;
        operand = '-';
      }
      operatorUsed = true;
    }
  });
}

function mulitply() {
  timesButtonEl.addEventListener('click', () => {
    if (!operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '*') {
          numberStore = Number(numberStore) * Number(bigScreenEl.textContent);
        } else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = numberStore + ' x ';
        bigScreenEl.textContent = numberStore;
        operand = '*';
      }
      operatorUsed = true;
    }
  });
}

function divide() {
  divideButtonEl.addEventListener('click', () => {
    if (!operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '/') {
          numberStore = Number(numberStore) / Number(bigScreenEl.textContent);
        } else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = numberStore + ' / ';
        bigScreenEl.textContent = numberStore;
        operand = '/';
      }
      operatorUsed = true;
    }
  });
}

function modulo() {
  moduloButtonEl.addEventListener('click', () => {
    if (!operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '%') {
          numberStore = Number(numberStore) % Number(bigScreenEl.textContent);
        } else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = numberStore + ' % ';
        bigScreenEl.textContent = numberStore;
        operand = '%';
      }
      operatorUsed = true;
    }
  });
}

function equalOperator() {
  equalButtonEl.addEventListener('click', () => {
    if (operand === '+') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' + ' + numberStore2 + ' = ';
      let total = Number(numberStore) + Number(numberStore2);
      bigScreenEl.textContent = total;

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '-') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' - ' + numberStore2 + ' = ';
      let total = Number(numberStore) - Number(numberStore2);
      bigScreenEl.textContent = total;

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '*') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' x ' + numberStore2 + ' = ';
      let total = Number(numberStore) * Number(numberStore2);
      bigScreenEl.textContent = total;

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '/') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' / ' + numberStore2 + ' = ';
      let total = Number(numberStore) / Number(numberStore2);
      bigScreenEl.textContent = total;

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '%') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' % ' + numberStore2 + ' = ';
      let total = Number(numberStore) % Number(numberStore2);
      bigScreenEl.textContent = total;

      operand = null;
      numberStore = total.toString();
    }
  });
}

function deleteNum() {
  deleteButtonEl.addEventListener('click', () => {
    let currentNum = bigScreenEl.textContent;
    bigScreenEl.textContent = currentNum.slice(0, -1);
  });
}

addition();
subtraction();
mulitply();
divide();
modulo();
equalOperator();
deleteNum();