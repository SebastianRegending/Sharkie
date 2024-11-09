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

  function muteAndUnmute() {
    document.getElementById('sound-btn-volume').classList.toggle('d-none');
    document.getElementById('sound-btn-mute').classList.toggle('d-none');
  }
  
  function fullscreenAndBack() {
    document.getElementById('fullscreen-btn-id').classList.toggle('d-none');
    document.getElementById('minimize-btn-id').classList.toggle('d-none');
  }