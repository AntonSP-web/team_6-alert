const questionsList = document.querySelector('.test__questions-list');
const testInputs = questionsList.querySelectorAll('input');
const resultButton = document.querySelector('.test__button_disabled');
let counter = 0;

// Для активации кнопки показать результат, если выбран хоть один чекбокс
testInputs.forEach(item => {
  item.addEventListener('change', isChecked);

  function isChecked() {
    if(item.checked) {
      resultButton.classList.remove('test__button_disabled');
      resultButton.removeAttribute('disabled');
      counter += 1;
    } else {
      counter -= 1;
      if(counter < 1) {
        resultButton.classList.add('test__button_disabled');
        resultButton.setAttribute('disabled', 'true');
      }
    }
  }
})

let correctAnswersCounter = 0;

const testForm = document.querySelector('.test__form');
const inputs = testForm.querySelectorAll('input');

testForm.addEventListener('submit', () => {
  inputs.forEach(item => {
    if(item.checked && item.hasAttribute('data-answer')) {
      correctAnswersCounter += 1;
    }
    if(item.checked && item.hasAttribute('data-answer') && item.type === 'radio') {
      correctAnswersCounter += 2;
    }
    if(correctAnswersCounter > 3) {
      testForm.action = './test-positive.html';
    }
  })
})






