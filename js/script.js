let source = [
  'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg',

  'https://mainline.i3s.unice.fr/mooc/week2p1/video4.mp4',

  'https://mainline.i3s.unice.fr/mooc/week2p1/video2.mp4',
];

let currentVideo = 0;
let myVideo = document.querySelector('#myVideo');
let btnPlay = document.querySelector('#play');
let btnRewind = document.querySelector('#rewind');
let btnVolUp = document.querySelector('#volUp');
let btnVolDown = document.querySelector('#volDown');
let btnMute = document.querySelector('#mute');
let listImage = document.querySelectorAll('img');


//Event Listener
myVideo.addEventListener('ended', nextVideo);
btnPlay.addEventListener('click', playPause);
btnRewind.addEventListener('click', rewind);
btnVolUp.addEventListener('click', volUp);
btnVolDown.addEventListener('click', volDown);
btnMute.addEventListener('click', mute);
listImage.forEach(function(ci) {
  ci.addEventListener('click', videoStart);
});



loadVideo();

function loadVideo() {
  myVideo.src = source[currentVideo % source.length];
  myVideo.load();
  currentVideo++;
}

function nextVideo() {
  loadVideo();
  myVideo.play();
}

function playPause() {
  if (myVideo.paused === true) {
    myVideo.play();
    btnPlay.innerHTML = "Pause";
  } else if (myVideo.paused === false) {
    myVideo.pause();
    btnPlay.innerHTML = "Play";
  }
}

function rewind() {
  myVideo.currentTime = 0;
}

function volUp() {
  myVideo.volume += 0.1;
}

function volDown() {
  myVideo.volume -= 0.1;
}

function mute() {
  if (myVideo.muted === false) {
    myVideo.muted = true;
    btnMute.style.color = "red";
  } else if (myVideo.muted === true) {
    myVideo.muted = false;
    btnMute.style.textDecoration = "none";
    btnMute.style.color = "white";

  }
}

function videoStart(evt) {
  console.log(evt.target);
  if (evt.target.matches('#rabbitThumb')) {
    myVideo.src = source[0];
    myVideo.play();
  }
  if (evt.target.matches('#sintelThumb')) {
    myVideo.src = source[1];
    myVideo.play();
  }
  if (evt.target.matches('#caminandesThumb')) {
    myVideo.src = source[2];
    myVideo.play();
  }
}
