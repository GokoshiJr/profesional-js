// Clase MediaPlayer
function MediaPlayer(config) { // el objeto lo llama config
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}

/**
 * Corre el array de plugins
 */
MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  })
}

/**
 * Play el video
 */
MediaPlayer.prototype.play = function() {
  this.media.play();
};

/**
 * Pausa el video
 */
MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

/**
 * Toggle para darle play o pausar el video
 */
MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

/**
 * Mutea el video
 */
MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

/**
 * Desmutea el video 
 */
MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
}

/**
 * Mutear o desmutear el sonido del video
 */
MediaPlayer.prototype.toggleMute = function() {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
}

export default MediaPlayer;