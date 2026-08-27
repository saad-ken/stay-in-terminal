// Import necessary modules
const Terminal = require('./Terminal.js');
const Command = require('./Command.js');
const Renderer = require('./Renderer.js');

// View class
class View {
  constructor(terminal) {
    this.terminal = terminal;
  }

  // Add a command to the view
  addCommand(command) {
    this.terminal.addCommand(command);
  }

  // Render the terminal
  render() {
    console.log('Terminal:');
    for (let command of this.terminal.commands) {
      console.log(`  - ${command.name} with arguments: ${command.arguments}`);
    }
  }
}

module.exports = View;
