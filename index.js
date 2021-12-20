console.log("wellcome to soptify");
let songIndex = 0;
let audioElement = new Audio("song/Offo.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let songimg = document.getElementById("songimg");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Gallan GOodiyaan ",
    filePath: "song/1.mp3",
    coverPath: "img/1.PNG",
  },
  { songName: "Locha-E-Ulfat", filePath: "song/2.mp3", coverPath: "img/2.PNG" },
  { songName: "Mere Sohneya", filePath: "song/3.mp3", coverPath: "img/3.PNG" },
  {
    songName: "Kho Gaye Hum kahna",
    filePath: "song/4.mp3",
    coverPath: "img/4.PNG",
  },
  { songName: "ajab-si", filePath: "song/5.mp3", coverPath: "img/Ajab-Si.jpg" },
  {
    songName: "Besharmi Ki Height",
    filePath: "song/6.mp3",
    coverPath: "img/Besharmi-ki-height.jpg",
  },
  {
    songName: "Ishq va la love",
    filePath: "song/7.mp3",
    coverPath: "img/music.jpg",
  },
  {
    songName: "jagga jiteya",
    filePath: "song/8.mp3",
    coverPath: "img/jagga jiteya.jpg",
  },
  { songName: "offo", filePath: "song/9.mp3", coverPath: "img/Offo.jpg" },
  {
    songName: "Sooraj Dooba Hain",
    filePath: "song/10.mp3",
    coverPath: "img/sooraj-Dooba-hai.jpg",
  },
  {
    songName: "SweetHeart ",
    filePath: "song/11.mp3",
    coverPath: "img/music.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "song/12.mp3",
    coverPath: "img/woh-din.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElemen.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});
//Listen to Event
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      masterSongName.innerText = songs[songIndex].songName;
      songimg.src = songs[songIndex].coverPath;
      audioElement.src = `song/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 12) {
    songIndex += 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  songimg.src = songs[songIndex].coverPath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    songimg.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });