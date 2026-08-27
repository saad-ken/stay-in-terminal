// Renderer class
class Renderer {
  constructor(view) {
    this.view = view;
  }

  // Start the rendering loop
  startRendering() {
    setInterval(() => {
      // Clear the console
      console.clear();

      // Render the terminal
      this.view.render();
    }, 100);
  }
}

module.exports = Renderer;
