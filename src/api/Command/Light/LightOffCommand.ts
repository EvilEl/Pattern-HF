import type { Command } from "../Command";
import type { Light } from "./Light";

export class LightOff implements Command {
  light:Light

  constructor(light:Light){
    this.light = light
  }

  execute(){
    this.light.off()
  }
}