// Clase AutoPlay
function AutoPlay() {}

/**
 * Pone a correr el video, al cargar la pagina pero muteado
 */
AutoPlay.prototype.run = function(player) {
  player.mute();
  player.play();
}

export default AutoPlay;