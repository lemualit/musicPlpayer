const Sunflower = new Audio('./sound/Sunflower.mp3');
const Whats = new Audio('./sound/Whats.mp3');
const Stranger = new Audio('./sound/Stranger.mp3');
const Castor = new Audio('./sound/Castor.mp3');
const Sunny = new Audio('./sound/Sunny.mp3');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');
const btnLike = document.querySelector(".btnLike");
const icolike = document.querySelector("#like")

var songs = [
  { id: 1, ele: Sunflower, audioName: 'Sunflower', like: false, bg: "./pict/Sunflower.png" },
  { id: 2, ele: Whats, audioName: "What's up danger?",  like: false, bg: "./pict/Whats.png" },
  { id: 3, ele: Stranger, audioName: 'Stranger things main theme',  like: false, bg:"./pict/Stranger.png"},
  { id: 4, ele: Castor, audioName: 'Daft Punk - Castor',  like: false, bg: "./pict/Castor.png"  },
  { id: 5, ele: Sunny, audioName: 'Bonney.M Sunny',  like: false, bg: "./pict/Sunny.png" },
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

switch (songs[current].like) {
  case true:
      icolike.className = "fa-solid fa-heart"
    break;
  case false:
      icolike.className = "fa-regular fa-heart"
    break;
}

let picture = document.querySelector('#picture');

picture.style.backgroundImage = 'url(./pict/Sunflower.png)';
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

btnLike.addEventListener('click', () => {
  var songItem = {...songs[current], like: !songs[current].like }
  switch (songItem.like) {
    case true:
        icolike.className = "fa-solid fa-heart"
      break;
    case false:
        icolike.className = "fa-regular fa-heart"
      break;
  }
  songs = songs.map(item => {
    if(item.id == songItem.id){
      return songItem;
    }
    return item;
  })
  console.log(songItem);
  console.log(songs);
})

let progress = document.getElementById("progress");

if(currentSong.play()){
  setInterval(()=>{
    progress.value = currentSong.currentTime;
  },500)
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

  switch (songs[current].like) {
    case true:
        icolike.className = "fa-solid fa-heart"
      break;
    case false:
        icolike.className = "fa-regular fa-heart"
      break;
  }

  songName.textContent = songs[current].audioName;
  picture.style.backgroundImage = `url( ${songs[current].bg} )`;
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




