const songs = [
    {
        title: "Jingle Bells", artist: "James Lord Pierpont", url: "./public/sounds/jingle-bells-with-lyrics-christmas-songs-hd-christmas-songs-and-carols.mp3"
    },
    {
                title: "All I Want for Christmas Is You ", artist: "Mariah Carey", url: "./public/sounds/Mariah-Carey-All-I-Want-for-Christmas-Is-You-(Make-My-Wish-Come-True-Edition).mp3"
    },
    {
                title: "Noite Feliz", artist: "Franz Xaver Gruber", url: "./public/sounds/noite-feliz.mp3"
    },
    {
                title: "We Wish You a Merry Christmas", artist: "anonimo", url: "./public/sounds/we-wish-you-a-merry-christmas-with-lyrics-christmas-carol-song.mp3"
    }
]

const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeControl = document.getElementById('volume');
const currentSongDisplay = document.getElementById('current-song');
const currentArtistDisplay =document.getElementById('current-artist');
const playPauseImg = document.querySelector('.playPause');

let srcPath = playPauseImg.src.split('/').pop();
let currentIndex = 0;
let isPlaying = false;
const audio = new Audio(songs[currentIndex].url);
audio.volume = 0.5;

function updateCurrentSongDisplay() {
    currentSongDisplay.textContent = `${songs[currentIndex].title}`;
    currentArtistDisplay.textContent = `${songs[currentIndex].artist}`;
}

function playSong() {
    try {
        
        audio.src = songs[currentIndex].url;
        audio.play();
        isPlaying = true;
        playPauseImg.src = './public/assets/pause.svg';
        updateCurrentSongDisplay();
    } catch (error) {
        console.error('Erro ao reproduzir a música:', error);
    }
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playPauseImg.src = './public/assets/play-button.svg';
}

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong();
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

updateCurrentSongDisplay();