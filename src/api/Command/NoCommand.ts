import type { Command } from "./Command";

export class NoCommand implements Command {
  execute(): void {
    
  }

  undo() {
    
  }
}