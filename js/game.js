let canvas;
let world;
let keyboard = new Keyboard();
let allIntervalIds = [];
let isMuted = false;

/**
 * Initializes the Game after click on startbutton
 */
function init() {  
  document.getElementById('startscreen').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  canvas = document.getElementById('canvas');
  initLevel();
  checkResolution();
  world = new World(canvas, keyboard, allIntervalIds);
  initMobileButtons();
  checkMuteStatus();
}

/**
 * Restarts the game after win or lose
 */
function restart() {
  document.getElementById('youwin').classList.add('d-none');
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  canvas = document.getElementById('canvas');
  initLevel();
  checkResolution();
  checkMuteStatus();
}

/**
 * Goes back to startscreen after win or lose
 */
function backToMenu() {
  document.getElementById('youwin').classList.add('d-none');
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('startscreen').classList.remove('d-none');
}

/**
 * Ends all Intervals
 */
function clearAllIntervals() {
  allIntervalIds.forEach(intervalId => clearInterval(intervalId));
  allIntervalIds = [];
}

/**
 * Toggles about mute and unmute
 */
function toggleMute() {
  isMuted = !isMuted;
  document.getElementById('sound-btn-volume').classList.toggle('d-none');
  document.getElementById('sound-btn-volume-mobile').classList.toggle('d-none');
  document.getElementById('sound-btn-mute').classList.toggle('d-none');
  document.getElementById('sound-btn-mute-mobile').classList.toggle('d-none');
  localStorage.setItem('isMuted', isMuted);
  if (typeof world !== 'undefined' && world !== null) {
    updateAllSounds();
  }
}

/**
 * Checks if the sound is muted or not
 */
function checkMuteStatus() {
  const savedMuteStatus = localStorage.getItem('isMuted');
  if (savedMuteStatus !== null) {
    isMuted = savedMuteStatus == 'true';
  }
  if (isMuted) {
    updateAllSounds();
    document.getElementById('sound-btn-mute').classList.remove('d-none');
    document.getElementById('sound-btn-volume').classList.add('d-none');
  } else {
    document.getElementById('sound-btn-mute').classList.add('d-none');
    document.getElementById('sound-btn-volume').classList.remove('d-none');
  }
}

/**
 * Initializes all gamesounds functions
 */
function updateAllSounds() {
  const volume = isMuted ? 0 : 1;
  this.updateWorldSound(volume);
  this.updateCharacterSound(volume);
  this.updateEndbossSound(volume);

}

/**
 * Plays the world sounds
 * @param {number} volume 
 */
function updateWorldSound(volume) {
  world.background_sound.volume = volume * 0.5;
  world.bubble_pop.volume = volume * 0.7;
  world.collect_coin.volume = volume;
  world.collect_bottle.volume = volume;
}

/**
 * Plays the character sounds
 * @param {number} volume 
 */
function updateCharacterSound(volume) {
  world.character.swimming_sound.volume = volume * 0.5;
  world.character.hurt_sound.volume = volume * 0.6;
  world.character.dead_sound.volume = volume * 0.6;
  world.character.enemy_hit_sound.volume = volume * 0.8;
  world.character.endboss_gameover_sound.volume = volume * 0.8;
  world.character.endboss_gameover_sound.volume = volume * 0.8;
}

/**
 * Plays the endboss sounds
 * @param {number} volume 
 */
function updateEndbossSound(volume) {
  world.level.enemies.forEach(enemy => {
    if (enemy instanceof Endboss) {
      enemy.endboss_youwin_sound.volume = volume * 0.5;
      enemy.endboss_bite_sound.volume = volume * 0.5;
      enemy.heartbeat_sound.volume = volume;
    }
  });
}

/**
 * Loads imprint only on startscreen
 */
function loadImpressum() {
  if (typeof world == 'undefined' && world == null) {
    document.getElementById('impressum').classList.remove('d-none');
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('game-informations').classList.add('d-none');
  }
}

/**
 * Closes the imprint
 */
function closeImpressum() {
  document.getElementById('impressum').classList.add('d-none');
  document.getElementById('startscreen').classList.remove('d-none');
  document.getElementById('game-informations').classList.remove('d-none');
}

/**
 * Checks the resolution and if its mobile or not
 */
function checkResolution() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Tab/i.test(navigator.userAgent);
  const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isLargeTablet = hasTouchSupport && width >= 1024 && width <= 1366;
  if (isMobileOrTablet || isLargeTablet) {
    document.getElementById('mobile-keyboard').classList.remove('d-none');
  } else {
    document.getElementById('mobile-keyboard').classList.add('d-none');
  }
  if (width <= height) {
    document.getElementById('check-resolution').classList.remove('d-none');
  } else {
    document.getElementById('check-resolution').classList.add('d-none');
  }
}


/**
 * Eventlistener for resize an resolution checks
 */
window.addEventListener('resize', checkResolution);

/**
 * Initializes the event listeners for the responsive touchbuttons
 */
function initMobileButtons() {
  initMobileButtonsSwim();
  initMobileButtonsAttack();
}

/**
* Initializes the event listeners for the mobile touchbuttons for Swim
*/
function initMobileButtonsSwim() {
  document.getElementById('key-left').addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard['LEFT'] = true;
    addColorToButton('key-left');
  });
  document.getElementById('key-left').addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard['LEFT'] = false;
    removeColorFromButton('key-left');
  });
  document.getElementById('key-right').addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard['RIGHT'] = true;
    addColorToButton('key-right');
  });
  document.getElementById('key-right').addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard['RIGHT'] = false;
    removeColorFromButton('key-right');
  });
  document.getElementById('key-up').addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard['UP'] = true;
    addColorToButton('key-up');
  });
  document.getElementById('key-up').addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard['UP'] = false;
    removeColorFromButton('key-up');
  });
  document.getElementById('key-down').addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard['DOWN'] = true;
    addColorToButton('key-down');
  });
  document.getElementById('key-down').addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard['DOWN'] = false;
    removeColorFromButton('key-down');
  });
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
}

/**
* Initializes the event listeners for the mobile touchbuttons D and SPACEBAR for Attack
*/
function initMobileButtonsAttack() {
  document.getElementById('key-space').addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard['SPACE'] = true;
    addColorToButton('key-space');
  });
  document.getElementById('key-space').addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard['SPACE'] = false;
    removeColorFromButton('key-space');
  });
  document.getElementById('key-d').addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard['D'] = true;
    addColorToButton('key-d');
  });
  document.getElementById('key-d').addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard['D'] = false;
    removeColorFromButton('key-d');
  });
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
}

  /**
 * Gives activated touchbutton a yellow background color
 */
function addColorToButton(button) {
  document.getElementById(button).classList.add('color-yellowandblack');
}

/**
 * Removes the yellow background-color from touchbutton
 */
function removeColorFromButton(button) {
  document.getElementById(button).classList.remove('color-yellowandblack');
}

