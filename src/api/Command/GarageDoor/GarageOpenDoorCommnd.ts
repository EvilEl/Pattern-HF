import type { Command } from "../Command";
import type { GarageDoor } from './GarageDoor';

export class GarageOpenDoorCommand implements Command {
  garageDoor:GarageDoor
  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }
  execute(): void {
    this.garageDoor.up()
  }

  undo(){
    this.garageDoor.down()
  }
}