import type { Command } from "./Command";

export class MacroCommand implements Command {
	commands: Command[]
	constructor(commands: Command[]){
    this.commands = commands;
  }
	execute(){
    this.commands.forEach(command => command.execute())
  }
	undo(){
    this.commands.forEach(command => command.undo())
  }
}