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
      counter += 1;
    } else {
      counter -= 1;
      if(counter < 1)  resultButton.classList.add('test__button_disabled');
    }
  }
})


