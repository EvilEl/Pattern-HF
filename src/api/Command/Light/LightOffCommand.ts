import type { Command } from "../Command";
import type { Light } from "./Light";

export class LightOffCommand implements Command {
  light:Light

  constructor(light:Light){
    this.light = light
  }

  execute(){
    this.light.off()
  }

  undo(){
    this.light.on()
  }
}