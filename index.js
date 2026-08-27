// Import necessary modules
const Terminal = require('./Terminal.js');
const Command = require('./Command.js');
const View = require('./View.js');
const Renderer = require('./Renderer.js');

// Main function to run the application
function run() {
  // Create a new terminal instance
  const terminal = new Terminal();

  // Create a new view instance
  const view = new View(terminal);

  // Create a new renderer instance
  const renderer = new Renderer(view);

  // Start the terminal rendering loop
  renderer.startRendering();
}

// Run the application
run();
