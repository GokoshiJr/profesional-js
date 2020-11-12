import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});

const button = document.getElementById("boton-1");
button.onclick = () => player.togglePlay();

const button2 = document.getElementById("boton-2");
button2.onclick = () => player.toggleMute();