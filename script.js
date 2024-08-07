const radioPlayer = document.getElementById('radio-player');
const playRadioButton = document.getElementById('play-radio');
const stopRadioButton = document.getElementById('stop-radio');

const musicPlayer = document.getElementById('music-player');
const playMusicButton = document.getElementById('play-music');
const stopMusicButton = document.getElementById('stop-music');

playRadioButton.addEventListener('click', () => {
	radioPlayer.play();
});

stopRadioButton.addEventListener('click', () => {
	radioPlayer.pause();
});

playMusicButton.addEventListener('click', () => {
	musicPlayer.play();
});

stopMusicButton.addEventListener('click', () => {
	musicPlayer.pause();
});
