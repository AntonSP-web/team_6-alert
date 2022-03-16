const videoSlider = document.querySelector('.video__slider .video__timeline');
const progressSlider = document.querySelector('.video__slider .video__fill');
const videoVolume = document.querySelector('.video__volume .video__timeline');
const progressVolume = document.querySelector('.video__volume .video__fill');

videoSlider.oninput = function() {
  progressSlider.style.width = this.value + '%';
};

videoVolume.oninput = function() {
  progressVolume.style.width = this.value + '%';
};
