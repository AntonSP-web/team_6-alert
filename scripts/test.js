const questionsList = document.querySelector('.test__questions-list');
const testInputs = questionsList.querySelectorAll('input');
const resultButton = document.querySelector('.test__button_disabled');

testInputs.forEach(item => {
  item.addEventListener('change', isChecked);

  function isChecked() {
    if(item.checked) {
      resultButton.classList.remove('test__button_disabled');
    } else {
      resultButton.classList.add('test__button_disabled');
    }
  }
})


