
const buttonArrow = document.querySelector('.sidebar__button');
const sideBarList = document.querySelector('.sidebar__list');

console.log(sideBarList);

sideBarList.addEventListener('click', (evt) => {
  const elem = evt.target.closest('.sidebar__item');
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

const startTestButton = document.querySelector('.test-preview__start');
const testPreview = document.querySelector('.test-preview__content');
const testContainer = document.querySelector('.test');

startTestButton.addEventListener('click', () => {
  testPreview.classList.add('test');
  testContainer.classList.remove('test');
})

var $sliderVolume = $(".video__volume #slider");
var $fillVolume = $(".video__volume .video__fill");
var $sliderTimeline = $(".video__slider #slider");
var $fillTimeline = $(".video__slider .video__fill");

function setBarVolume() {
	$fillVolume.css("width", $sliderVolume.val() + "%");
};
function setBarTimeline() {
	$fillTimeline.css("width", $sliderTimeline.val() + "%");
};
$sliderTimeline.on("input", setBarTimeline);
$sliderVolume.on("input", setBarVolume);
setBarTimeline();
setBarVolume();



