let canvas;
let world;
let keyboard = new Keyboard();
let allIntervalIds = [];
let isMuted = false;

function init() {
  document.getElementById('startscreen').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  canvas = document.getElementById('canvas');
  initLevel();
  world = new World(canvas, keyboard, allIntervalIds);
}

function restart() {
  document.getElementById('youwin').classList.add('d-none');
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  canvas = document.getElementById('canvas');
  initLevel();
  world = new World(canvas, keyboard, allIntervalIds);
}

function backToMenu() {
  document.getElementById('youwin').classList.add('d-none');
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('startscreen').classList.remove('d-none');
}

function clearAllIntervals() {
  allIntervalIds.forEach(intervalId => clearInterval(intervalId));
  allIntervalIds = [];
}

function toggleMute() {
  isMuted = !isMuted;
  document.getElementById('sound-btn-volume').classList.toggle('d-none');
  document.getElementById('sound-btn-mute').classList.toggle('d-none');
  if (typeof world !== 'undefined' && world !== null) {
    updateAllSounds();
}
}

function updateAllSounds() {
  const volume = isMuted ? 0 : 1;
  this.updateWorldSound(volume);
  this.updateCharacterSound(volume);
  this.updateEndbossSound(volume);
 
}

function updateWorldSound(volume) {
  world.background_sound.volume = volume * 0.5;
  world.bubble_pop.volume = volume * 0.7;
  world.collect_coin.volume = volume;
  world.collect_bottle.volume = volume;
}

function updateCharacterSound(volume) {
  world.character.swimming_sound.volume = volume * 0.5;
  world.character.hurt_sound.volume = volume * 0.6;
  world.character.dead_sound.volume = volume * 0.6;
  world.character.enemy_hit_sound.volume = volume * 0.8;
  world.character.endboss_gameover_sound.volume = volume * 0.8;
  world.character.endboss_gameover_sound.volume = volume * 0.8;
}

function updateEndbossSound(volume) {
  world.level.enemies.forEach(enemy => {
    if (enemy instanceof Endboss) {
        enemy.endboss_youwin_sound.volume = volume * 0.5;
        enemy.endboss_bite_sound.volume = volume * 0.5;
        enemy.heartbeat_sound.volume = volume;
    }
});
}

function loadImpressum() {
  if (typeof world == 'undefined' && world == null) {
  document.getElementById('impressum').classList.remove('d-none');
  document.getElementById('startscreen').classList.add('d-none');
  document.getElementById('game-informations').classList.add('d-none');
  }
}

function closeImpressum() {
  document.getElementById('impressum').classList.add('d-none');
  document.getElementById('startscreen').classList.remove('d-none');
  document.getElementById('game-informations').classList.remove('d-none');
}

window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
        return;
      }  
      switch (event.key) {
        case "ArrowDown":
            keyboard.DOWN = true;
          break;
        case "ArrowUp":
            keyboard.UP = true;
          break;
        case "ArrowLeft":
            keyboard.LEFT = true;
          break;
        case "ArrowRight":
            keyboard.RIGHT = true;
          break;
        case " ":
            keyboard.SPACE = true;
          break;
          case "d":
            keyboard.D = true;
          break;
        default:
          return;
      }
      event.preventDefault();
    },
    true,
  );

  window.addEventListener('keyup', (event) => {
    if (event.defaultPrevented) {
        return;
      }  
      switch (event.key) {
        case "ArrowDown":
            keyboard.DOWN = false;
          break;
        case "ArrowUp":
            keyboard.UP = false;
          break;
        case "ArrowLeft":
            keyboard.LEFT = false;
          break;
        case "ArrowRight":
            keyboard.RIGHT = false;
          break;
        case " ":
            keyboard.SPACE = false;
          break;
          case "d":
            keyboard.D = false;
          break;
        default:
          return;
      }
      event.preventDefault();
    },
    false,
  );