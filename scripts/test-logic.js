const previewBlock = document.querySelector('.test-preview'); // блок превью, о блоке
const btnBlockPreview = previewBlock.querySelector('.button') // кнопка "Начать тест"
const counterPreview = previewBlock.querySelector('.test-counter') // количество попыток

const testBlock = document.querySelector('.test-pass'); // блок теста
const btnShowResult = testBlock.querySelector('.button'); // кнопка "Показать результат"
const checksBox = testBlock.querySelectorAll('.test__checkbox') // все "чеки"
const checksRadio = testBlock.querySelectorAll('.test__radio') // все "чеки"
const conditionTest = testBlock.querySelector('.test-header__link') // кнопка посмотреть условия

const testResult = document.querySelector('.test-result'); // блок результата теста
const textPositive = testResult.querySelector('.info__subtitle_positive'); // блок с позитивным текстом
const textNecative = testResult.querySelector('.info__subtitle_negative'); // блок с негативным текстом
const btnReset = testResult.querySelector('.button'); // кнопка "Пересдать"
const answer = testResult.querySelectorAll('.test__subparagraph'); // ответы
const conditionResult = testResult.querySelector('.test-header__link') // кнопка посмотреть условия

const cardResult = document.querySelector('.test__message'); // блок с результатами в процентах
const percent = cardResult.querySelector('.info__title'); // строка с прцентами
const title = cardResult.querySelector('.info__subtitle'); // строка под процентами

const aboutBlock = document.querySelector('.test-about'); // блок показа условий
const btnAboutBlock = aboutBlock.querySelector('.test-header__link'); // кнопка "Вернуться к тесту"
const counterAbout = aboutBlock.querySelector('.test-counter') // количество попыток

const btnNextPage = document.querySelector('.button__next') // кнопка "Далее"

let linkToBlock = '';
let counter = 3;
let maxPercent = 0;

// ================ описание функций ======================================
function closedBlock (block) {
  block.classList.add('container_closed');
}

function openBlock (block) {
  block.classList.remove('container_closed');
}

// удаление/добавления блока
function closeAndOpenBlock (blockClose, blockOpen) {
  closedBlock(blockClose);
  openBlock(blockOpen);
}

// проверка ответов, возврат результата
function verifyCheck() {
  let totalScore = 0;
  checksBox.forEach(item => {
    if (item.checked)
    totalScore += 16.7;
    })
    if (checksRadio[1].checked) {
      totalScore += 50;
    }
    return Math.trunc(totalScore)
  }

// показать результат ответов
function showAnswer() {
  for (i =0 ; i < checksBox.length; i++) {
    if (checksBox[i].checked) {
      answer[i].classList.add('subparagraph_true', 'subparagraph_type_true');
    }
    else {
      answer[i].classList.add('subparagraph_type_not-chosen');
    }
  }

  for (i = 3 ; i < (checksRadio.length) + 3; i++) {
    if (checksRadio[i-3].checked && i !== 4) {
      answer[i].classList.add('subparagraph_false', 'subparagraph_type_false-choice');
    }

    else if (checksRadio[i-3].checked && i === 4) {
      answer[i].classList.add('subparagraph_true', 'subparagraph_type_true');
    }

    else {
      answer[i].classList.add('subparagraph_type_false');
      answer[4].classList.add('subparagraph_type_not-chosen');
    }
  }

}

// обнуление чекбоксов, радиокнопок и деактивации кнопки "Показать результат"
function clearCheck() {
  document.querySelectorAll('.test__checkbox').forEach(item=>{
    item.checked = false;
    })
  document.querySelectorAll('.test__radio').forEach(item=>{
    item.checked = false;
    })
    answer.forEach(item => {
      item.className = 'test__subparagraph';
    })
    btnShowResult.classList.remove('button_view_active');
    btnShowResult.classList.add('button_view_not-active');
}

// функция активации кнопки
function activationBtnNext(button) {
  button.classList.remove('button_view_not-active', 'button_type_disabled');
  button.classList.add('button_view_active', 'button_type_next');
}

// функция деактивации кнопки
function deactivation(button) {
  button.setAttribute('disabled', true);
  button.classList.add('button_view_not-active');
  button.classList.remove('button_type_restart-positive');
}

// ============= описание действий ==================

// нажатие на кнопку "начать тест"
btnBlockPreview.addEventListener('click', function() {
  counter -= 1;
  closeAndOpenBlock(previewBlock, testBlock)
});


// нажатие на кнопку "показать резульат"
btnShowResult.addEventListener('click', function() {
  closeAndOpenBlock(testBlock, testResult);
  const  result = verifyCheck();

  if (result > maxPercent) {
    maxPercent = result;
  }

  counterPreview.textContent = counter;
  counterAbout.textContent = counter;

  if (!counter) {
    deactivation(btnReset);
    activationBtnNext(btnNextPage);
  }

  percent.textContent = result+"%";
  if (result >= 83 || maxPercent >= 83) {
    // показать положительный результат
    cardResult.classList.add('test__message_type_positive');
    title.textContent = 'Отличный результат!';
    btnNextPage.setAttribute('href', './course-success.html');
    activationBtnNext(btnNextPage);
  }
  else {
    // показать отрицательные результат
    cardResult.classList.remove('test__message_type_positive');
    title.textContent = 'К сожалению, вы не набрали проходной результат.';
    btnNextPage.setAttribute('href', './course-fail.html')  // сожалеем
    closeAndOpenBlock(textPositive, textNecative);
  }
  showAnswer();
});

// активируем клавишу "Показать результат" при нашаните на любой чекбокс
document.querySelectorAll('.test__checkbox').forEach(item=>{
  item.addEventListener('click',function() {
    activationBtnNext(btnShowResult);
    btnShowResult.removeAttribute('disabled');
    })
  });

  // активируем клавишу "Показать результат" при нашаните на любую радиокнопку
document.querySelectorAll('.test__radio').forEach(item=>{
  item.addEventListener('click',function() {
    btnShowResult.classList.remove('button_view_not-active');
    btnShowResult.classList.add('button_view_active');
    btnShowResult.removeAttribute('disabled');
    })
  });

// нажатие на кнопу "Пересдать" в блоке результатов
btnReset.addEventListener('click', function() {
  clearCheck();
  closeAndOpenBlock(testResult, previewBlock);
});

// нажатие на кнопку "Посмотреть условия" в блоке теста
conditionTest.addEventListener('click', function() {
  linkToBlock = testBlock;
  closeAndOpenBlock(testBlock, aboutBlock);
});

// нажатие на кнопку "Посмотреть условия" в блоке результата
conditionResult.addEventListener('click', function() {
  linkToBlock = testResult;
  closeAndOpenBlock(testResult, aboutBlock);
});

// нажатие на кнопку "Вернуться к тесту" в блок условий
btnAboutBlock.addEventListener('click', function() {
  closeAndOpenBlock(aboutBlock, linkToBlock);
})


