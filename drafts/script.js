
const buttonArrow = document.querySelector('.sidebar__button');
const sideBarList = document.querySelector('.sidebar__list');


sideBarList.addEventListener('click', (evt) => {
  const elem = evt.target.closest('.sidebar__item-wrap');
  const listActivity = elem.querySelector('.sidebar__list-activity');

  if(evt.target.classList.contains('sidebar__button_type_arrow-down')) {
    listActivity.classList.remove('sidebar__list-activity_closed');
    evt.target.classList.remove('sidebar__button_type_arrow-down');
    evt.target.classList.add('sidebar__button_type_arrow-up');

  } else if(evt.target.classList.contains('sidebar__button_type_arrow-up')) {
    evt.target.classList.remove('sidebar__button_type_arrow-up');
    evt.target.classList.add('sidebar__button_type_arrow-down');
    listActivity.classList.add('sidebar__list-activity_closed');
  }
});

// переход с начать тест на блок тест

const test = document.querySelector('.test');
const testPreview = test.querySelector('.test__preview');
const startTestButton = test.querySelector('.test__button');
const testContainer = test.querySelector('.test__container');

startTestButton.addEventListener('click', () => {
  testPreview.classList.add('container_closed');
  testContainer.classList.remove('container_closed');
})

const videoSlider = document.querySelector('.video__slider .video__timeline');
const progressSlider = document.querySelector('.video__slider .video__fill');
const videoVolume = document.querySelector('.video__volume .video__timeline');
const progressVolume = document.querySelector('.video__volume .video__fill');
videoSlider.oninput = function(){
  progressSlider.style.width = this.value + '%';
};
videoVolume.oninput = function(){
  progressVolume.style.width = this.value + '%';
};

// const startTestButton = document.querySelector('.test-preview__start');
// const testPreview = document.querySelector('.test-preview__content');
// const testClosed = document.querySelector('.container_closed');

// startTestButton.addEventListener('click', () => {
//   testPreview.classList.add('container_closed');
//   testClosed.classList.remove('container_closed');
// })

// const test = document.querySelector('.test');
// const testPreview = test.querySelector('.test__preview');
// const startTestButton = test.querySelector('.test__button');
// const testContainer = test.querySelector('.test__container');

// startTestButton.addEventListener('click', () => {
//   testPreview.classList.add('container_closed');
//   testContainer.classList.remove('container_closed');
// })




