import type { Command } from "./Command"

export class SimpleRemoteControl {
  slot: Command | null = null
  setCommand(command: Command) {
    this.slot = command
  }
  buttonWasPress(){
    this.slot?.execute()
  }
}