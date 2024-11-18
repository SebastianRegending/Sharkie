let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  document.getElementById('startscreen').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  canvas = document.getElementById('canvas');
  initLevel();
  world = new World(canvas, keyboard);
}

function restart() {
  document.getElementById('youwin').classList.add('d-none');
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('canvas').classList.remove('d-none');
  canvas = document.getElementById('canvas');
  initLevel();
  world = new World(canvas, keyboard);
}

function backToMenu() {
  document.getElementById('youwin').classList.add('d-none');
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('startscreen').classList.remove('d-none');
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

  // function muteGame() {
  //   document.getElementById('sound-btn-volume').classList.add('d-none');
  //   document.getElementById('sound-btn-mute').classList.remove('d-none');
  // }
  
  // function unmuteGame() {
  //   document.getElementById('sound-btn-volume').classList.remove('d-none');
  //   document.getElementById('sound-btn-mute').classList.add('d-none');
  // }
