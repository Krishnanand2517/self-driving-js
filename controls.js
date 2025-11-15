class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    window.addEventListener("keydown", (keyboardEvent) => {
      switch (keyboardEvent.key) {
        case "ArrowUp":
        case "w":
          this.forward = true;
          break;
        case "ArrowLeft":
        case "a":
          this.left = true;
          break;
        case "ArrowRight":
        case "d":
          this.right = true;
          break;
        case "ArrowDown":
        case "s":
          this.reverse = true;
          break;
      }
    });

    window.addEventListener("keyup", (keyboardEvent) => {
      switch (keyboardEvent.key) {
        case "ArrowUp":
        case "w":
          this.forward = false;
          break;
        case "ArrowLeft":
        case "a":
          this.left = false;
          break;
        case "ArrowRight":
        case "d":
          this.right = false;
          break;
        case "ArrowDown":
        case "s":
          this.reverse = false;
          break;
      }
    });
  }
}
