// Import necessary modules
const Command = require('./Command.js');

// Terminal class
class Terminal {
  constructor() {
    this.commands = [];
  }

  // Add a command to the terminal
  addCommand(command) {
    this.commands.push(command);
  }

  // Run all the commands in the terminal
  runCommands() {
    for (let command of this.commands) {
      command.execute();
    }
  }
}

module.exports = Terminal;
