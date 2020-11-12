import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el: video}); // Instancia de clase

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
