class Keyboard {
    RIGHT = false;
    LEFT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
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