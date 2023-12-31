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
const clearButtonEl = document.querySelector('.js-clear-button');

let operatorUsed = false;
let operand;
let numberStore;
let numberStore2;

let calculatorState = false;
bigScreenEl.textContent = '0';


numbersEl.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (calculatorState || buttonText !== '0') {
      if (!calculatorState) {
        bigScreenEl.textContent = '';
        calculatorState = true;
      }
      if (operatorUsed === true) {
        bigScreenEl.textContent = '';
        operatorUsed = false;
      }
      bigScreenEl.textContent += buttonText;
    }
  });
})

decimalButtonEl.addEventListener('click', () => {
  if (!bigScreenEl.textContent.includes('.')) {
    const buttonText = decimalButtonEl.textContent
    bigScreenEl.textContent += buttonText;
    calculatorState = true;
  }
});

function addition() {
  plusButtonEl.addEventListener('click', () => {
    if (calculatorState && !operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '+') { //this handles the multiple operations
          numberStore = Number(numberStore) + Number(bigScreenEl.textContent);
        }
        else if (operand === '-') {
          numberStore = Number(numberStore) - Number(bigScreenEl.textContent);
        }
        else if (operand === '/') {
          numberStore = Number(numberStore) / Number(bigScreenEl.textContent);
        }
        else if (operand === '*') {
          numberStore = Number(numberStore) * Number(bigScreenEl.textContent);
        }
        else if (operand === '%') {
          numberStore = Number(numberStore) % Number(bigScreenEl.textContent);
        }

        else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = roundResult(numberStore) + ' + ';
        bigScreenEl.textContent = roundResult(numberStore);
        operand = '+';
      }
      operatorUsed = true;
    } else if (operatorUsed) {
      operand = '+';
      smallScreenEl.textContent = roundResult(numberStore) + ' + ';
    }
  });
}

function subtraction() {
  minusButtonEl.addEventListener('click', () => {
    if (calculatorState && !operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '-') { //handles the multiple operands at the same time
          numberStore = Number(numberStore) - Number(bigScreenEl.textContent);
        }
        else if (operand === '+') {
          numberStore = Number(numberStore) + Number(bigScreenEl.textContent);
        }
        else if (operand === '/') {
          numberStore = Number(numberStore) / Number(bigScreenEl.textContent);
        }
        else if (operand === '*') {
          numberStore = Number(numberStore) * Number(bigScreenEl.textContent);
        }
        else if (operand === '%') {
          numberStore = Number(numberStore) % Number(bigScreenEl.textContent);
        }
        else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = roundResult(numberStore) + ' - ';
        bigScreenEl.textContent = roundResult(numberStore);
        operand = '-';
        roundResult(numberStore);
      }
      operatorUsed = true;
    } else if (operatorUsed) {
      operand = '-';
      smallScreenEl.textContent = roundResult(numberStore) + ' - ';
    }
  });
}

function mulitply() {
  timesButtonEl.addEventListener('click', () => {
    if (calculatorState && !operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '*') { //handles multiple operators
          numberStore = Number(numberStore) * Number(bigScreenEl.textContent);
        }
        else if (operand === '+') {
          numberStore = Number(numberStore) + Number(bigScreenEl.textContent);
        }
        else if (operand === '-') {
          numberStore = Number(numberStore) - Number(bigScreenEl.textContent);
        }
        else if (operand === '/') {
          numberStore = Number(numberStore) / Number(bigScreenEl.textContent);
        }
        else if (operand === '%') {
          numberStore = Number(numberStore) % Number(bigScreenEl.textContent);
        }
        else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = roundResult(numberStore) + ' x ';
        bigScreenEl.textContent = roundResult(numberStore);
        operand = '*';
      }
      operatorUsed = true;
    } else if (operatorUsed) {
      operand = '*';
      smallScreenEl.textContent = roundResult(numberStore) + ' * ';
    }
  });
}

function divide() {
  divideButtonEl.addEventListener('click', () => {
    if (calculatorState && !operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '/') {
          numberStore = Number(numberStore) / Number(bigScreenEl.textContent);
        }
        else if (operand === '+') {
          numberStore = Number(numberStore) + Number(bigScreenEl.textContent);
        }
        else if (operand === '-') {
          numberStore = Number(numberStore) - Number(bigScreenEl.textContent);
        }
        else if (operand === '*') {
          numberStore = Number(numberStore) * Number(bigScreenEl.textContent);
        }
        else if (operand === '%') {
          numberStore = Number(numberStore) % Number(bigScreenEl.textContent);
        }
        else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = roundResult(numberStore) + ' / ';
        bigScreenEl.textContent = roundResult(numberStore);
        operand = '/';
      }
      operatorUsed = true;
    } else if (operatorUsed) {
      operand = '/';
      smallScreenEl.textContent = roundResult(numberStore) + ' / ';
    }
  });
}

function modulo() {
  moduloButtonEl.addEventListener('click', () => {
    if (calculatorState && !operatorUsed) {
      if (bigScreenEl.textContent) {
        if (operand === '%') {
          numberStore = Number(numberStore) % Number(bigScreenEl.textContent);
        }
        else if (operand === '+') {
          numberStore = Number(numberStore) + Number(bigScreenEl.textContent);
        }
        else if (operand === '-') {
          numberStore = Number(numberStore) - Number(bigScreenEl.textContent);
        }
        else if (operand === '/') {
          numberStore = Number(numberStore) / Number(bigScreenEl.textContent);
        }
        else if (operand === '*') {
          numberStore = Number(numberStore) * Number(bigScreenEl.textContent);
        }
        else {
          numberStore = bigScreenEl.textContent;
        }
        smallScreenEl.textContent = roundResult(numberStore) + ' % ';
        bigScreenEl.textContent = roundResult(numberStore);
        operand = '%';
      }
      operatorUsed = true;
    } else if (operatorUsed) {
      operand = '%';
      smallScreenEl.textContent = roundResult(numberStore) + ' % ';
    }
  });
}

function equalOperator() {
  equalButtonEl.addEventListener('click', () => {
    if (operand === '+') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' + ' + numberStore2 + ' = ';
      let total = Number(numberStore) + Number(numberStore2);
      bigScreenEl.textContent = roundResult(total);

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '-') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' - ' + numberStore2 + ' = ';
      let total = Number(numberStore) - Number(numberStore2);
      bigScreenEl.textContent = roundResult(total);

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '*') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' x ' + numberStore2 + ' = ';
      let total = Number(numberStore) * Number(numberStore2);
      bigScreenEl.textContent = roundResult(total);

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '/') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' / ' + numberStore2 + ' = ';
      let total = Number(numberStore) / Number(numberStore2);
      bigScreenEl.textContent = roundResult(total);

      operand = null;
      numberStore = total.toString();
    }

    else if (operand === '%') {
      numberStore2 = bigScreenEl.textContent;
      smallScreenEl.textContent = numberStore + ' % ' + numberStore2 + ' = ';
      let total = Number(numberStore) % Number(numberStore2);
      bigScreenEl.textContent = roundResult(total);

      operand = null;
      numberStore = total.toString();
    }
  });
}

function deleteNum() {
  deleteButtonEl.addEventListener('click', () => {
    if (calculatorState) {
      let currentNum = bigScreenEl.textContent;
      bigScreenEl.textContent = currentNum.slice(0, -1);
    }
  });
}

function clearNum() {
  clearButtonEl.addEventListener('click', () => {
    calculatorState = false;
    bigScreenEl.textContent = '0';
    smallScreenEl.textContent = '';
    numberStore = '';
    numberStore2 = '';
    operand = null;
    operatorUsed = false;
  });
}

function roundResult(number) {
  return Math.round(number * 100000) / 100000
}

addition();
subtraction();
mulitply();
divide();
modulo();
equalOperator();
deleteNum();
clearNum();