import type { Command } from "../Command";
import type { Light } from "./Light";

export class LightOnCommand implements Command {
  light:Light

  constructor(light:Light){
    this.light = light
  }

  execute(){
    this.light.on()
  }

  undo() {
    this.light.off()
  }
}