const preview = document.querySelector('.pages__test-preview');  // блок "Превью"
const btnPreview = preview.querySelector('.test-preview__start'); // кнопка Начать тест
const shotInfo = preview.querySelector('.test-preview__shot'); // элемен количество попыток

const test = document.querySelector('.pages__test-go');   // блок "Тест"
const btnTerms = test.querySelector('.test-result__link');  // кнопка "Посмотреть условия"
const btnShowResult = test.querySelector('.test-result__btn'); // кнопка "Показать результат"
const checks = test.querySelectorAll('.form-test__check'); // значение чекбоксов и радиокнопок

const aboutTest = document.querySelector('.pages__test-about');  // блок "О тесте"
const btnBackToTest = aboutTest.querySelector('.test-result__link')  // кнопка возврата к тесту
const shotInfoAbout = aboutTest.querySelector('.test-preview__shot');

const resultTestOk = document.querySelector('.pages__test-ok'); // блок положительного резульата
const btnResultOkTermsResult = resultTestOk.querySelector('.test-result__link'); // кнопка "Посмотреть условия"
const btnResultOkStartOver = resultTestOk.querySelector('.test-result__btn') // кнопка "Пересдать"
const rateOk = resultTestOk.querySelector('.test-result__rate'); // итог в процентах
const iconsOk = resultTestOk.querySelectorAll('.test-result__item'); // элементы  текста с иконоками

const resultTestNo = document.querySelector('.pages__test-no'); // блок отрицательного резульата
const btnResultNoTermsResult = resultTestNo.querySelector('.test-result__link'); // кнопка "Посмотреть условия"
const btnResultNoStartOver = resultTestNo.querySelector('.test-result__btn') // кнопка "Пересдать"
const rateNo = resultTestNo.querySelector('.test-result__rate'); // итог в процентах
const iconsNo = resultTestNo.querySelectorAll('.test-result__item'); // элементы  текста с иконоками



let lastBlok = ''; // переменрая для установки блока, из которо был открыт блок "О тесте"
let rusultTest = 0;  // общий результат в процентах
let shot = 3 // количество попыток

// ================== описание функций =====================================================

// функция удаления блока
function delBlock (block){
  block.classList.remove('block-open');
}

// функция добавления блока
function addBlock (block){
  block.classList.add('block-open');
}

// функция удаления одного блока и добавления блока
function delAddBlock (blockDel, blockAdd ) {
  delBlock (blockDel);
  addBlock (blockAdd)
  lastBlok = blockDel;
}

// функция установки иконок в блоке показа результата
function ShowAnswerIcons (icon) {
  for(let i = 0; i < checks.length; i++) {
    if (checks[i].checked && i <= 2) {
      icon[i].classList.remove('test-result__item_type_true')
      icon[i].classList.add('test-result__item_type_ok')
    }
    else if (!(checks[i].checked) && i <= 2) {
      icon[i].classList.remove('test-result__item_type_ok')
      icon[i].classList.add('test-result__item_type_true')
    }

    else if (checks[i].checked && i >= 3 && i !=4 ) {
      icon[i].classList.remove('test-result__item_type_false')
      icon[i].classList.add('test-result__item_type_error')
    }

    else if (!(checks[i].checked) && i >= 3 && i !=4 ) {
      icon[i].classList.remove('test-result__item_type_error')
      icon[i].classList.add('test-result__item_type_false')
    }
  }
}

// функция сброса чекбоксов, деактивации кнопки проверки резульатата, уменьшение попыток
function reset (del, add) {
  delAddBlock(del, add);
  rusultTest = 0;
  shot = shot - 1;
  if (shot == 0) {   //  заглушка на количество попыток равным 0
    alert('Количество попыток закончилсь');
  }
  shotInfo.textContent = shot;
  shotInfoAbout.textContent = shot;
  btnShowResult.setAttribute('disabled', true);
  btnShowResult.classList.remove('test-result__btn_theme_not-pass');
  btnShowResult.classList.add('test-result__btn_theme_not-active');
  document.querySelectorAll('.form-test__check').forEach(item=>{
    item.checked = false;
    })
}

// ============================= действия  ========================================

btnPreview.addEventListener('click', function() {delAddBlock(preview, test)});  // переход к тесту по кнопик "Начать тест"

btnTerms.addEventListener('click', function() {delAddBlock(test, aboutTest)});  // открываем блок Условий по кнопки "Посмотреть условия"


btnBackToTest.addEventListener('click', function() {delAddBlock(aboutTest, lastBlok)})  // возварщаемся оюратно к тесту из блка Условий

// активируем клавишу "Показать результат" при нашаните на любой чекбокс или радиокнопку
document.querySelectorAll('.form-test__check').forEach(item=>{
  item.addEventListener('click',function() {
    btnShowResult.classList.remove('test-result__btn_theme_not-active');
    btnShowResult.classList.add('test-result__btn_theme_not-pass');
    btnShowResult.removeAttribute('disabled')
    })
  })

// открываем блок с положительный результатом
btnShowResult.addEventListener('click', function() {
  document.querySelectorAll('[type="checkbox"]').forEach(item=>{
    if (item.checked) {rusultTest += 16.7}
  })
    if (document.getElementById('radiokVariantTwo').checked) {
    rusultTest += 50;
  }

  if (rusultTest >= 83) {
    ShowAnswerIcons(iconsOk);
    rateOk.textContent = Math.trunc(rusultTest) + '%';
    delAddBlock(test, resultTestOk);
  }
  else {
    ShowAnswerIcons(iconsNo)
    rateNo.textContent = Math.trunc(rusultTest) + '%';
    delAddBlock(test, resultTestNo);
  }

});

btnResultOkTermsResult.addEventListener('click', function() {delAddBlock(resultTestOk, aboutTest)});  // открываем блок Условий по кнопки "Посмотреть условия"
btnResultNoTermsResult.addEventListener('click', function() {delAddBlock(resultTestNo, aboutTest)});  // открываем блок Условий по кнопки "Посмотреть условия"


// начинаем зановово тест и сбрасываем чекбоксы и радиокнопки
btnResultOkStartOver.addEventListener('click', function() {
  reset (resultTestOk, preview);
});

// начинаем зановово тест и сбрасываем чекбоксы и радиокнопки
btnResultNoStartOver.addEventListener('click', function() {
  reset (resultTestNo, preview);
});



