const music = document.querySelector('#music');
const seekBar = document.querySelector('#seek-bar');

music.addEventListener('timeupdate', () => {
  seekBar.value = music.currentTime;
});

seekBar.addEventListener('input', () => {
  music.currentTime = seekBar.value;
});