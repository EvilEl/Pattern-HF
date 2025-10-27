import type { Command } from "../Command";
import type { Light } from "./Light";

export class LightOn implements Command {
  light:Light

  constructor(light:Light){
    this.light = light
  }

  execute(){
    this.light.on()
  }
}