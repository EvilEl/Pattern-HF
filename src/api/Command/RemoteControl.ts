import type { Command } from "./Command";
import { NoCommand } from "./NoCommand";

export class RemoteControl{
  onCommands:Command[]
  offCommands:Command[]
  undoCommand:Command
  constructor(){
    this.onCommands = []
    this.offCommands = []

    for(let i = 0; i < 7; i++){
      this.onCommands[i] = new NoCommand()
      this.offCommands[i] = new NoCommand()
    }

    this.undoCommand = new NoCommand()
  }

  setCommand(slot:number, onCommand:Command, offCommand:Command){
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }


  onButtonWasPressed(slot:number){
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  offButtonWasPressed(slot:number){
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  undoButtonWasPressed(){
    this.undoCommand.undo()
  }
}