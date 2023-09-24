const Sunflower = new Audio('./sound/Sunflower.mp3');
const Whats = new Audio('./sound/Whats.mp3');
const Stranger = new Audio('./sound/Stranger.mp3');
const Castor = new Audio('./sound/Castor.mp3');
const Sunny = new Audio('./sound/Sunny.mp3');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: Sunflower, audioName: 'Sunflower' },
  { ele: Whats, audioName: "What's up danger?" },
  { ele: Stranger, audioName: 'Stranger things main theme' },
  { ele: Castor, audioName: 'Daft Punk - Castor' },
  { ele: Sunny, audioName: 'Bonney.M Sunny' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

// const audio = (songs[current].ele);
// const audioProgress = document.getElementById('progress');

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

let progress = document.getElementById("progress");

if(currentSong.play()){
  setInterval(()=>{
    progress.value = currentSong.currentTime;
  },150)
}

progress.onchange = function(){
  currentSong.play();
  currentSong.currentTime = progress.value;
  playPauseIcon.className = 'fa-solid fa-circle-pause fa-xl bigger';
}


const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'fa-solid fa-circle-pause fa-xl bigger';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'fa-solid fa-circle-play fa-xl bigger';
  }
}



