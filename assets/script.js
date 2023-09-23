const musicButton = document.querySelector('.music-button');
const audio = new Audio('music/Whats.mp3');
let isPlaying = false;

musicButton.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
});