let canvas;
let world;
let keyboard = new Keyboard();
let muted = false;

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

  function muteGame() {
    document.getElementById('sound-btn-volume').classList.add('d-none');
    document.getElementById('sound-btn-mute').classList.remove('d-none');
    muted = true;
  }
  
  function unmuteGame() {
    document.getElementById('sound-btn-volume').classList.remove('d-none');
    document.getElementById('sound-btn-mute').classList.add('d-none');
    muted = false;
  }
  
  function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
  }
  
  function enterFullscreen(element) {
    document.getElementById('fullscreen-btn-id').classList.toggle('d-none');
    document.getElementById('minimize-btn-id').classList.toggle('d-none');
    document.getElementById('canvas').classList.add('canvas-fullscreen');
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {
    }
  }
  
  function exitFullscreen() {
    document.getElementById('minimize-btn-id').classList.toggle('d-none');
    document.getElementById('fullscreen-btn-id').classList.toggle('d-none');
    document.getElementById('canvas').classList.remove('canvas-fullscreen');
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }