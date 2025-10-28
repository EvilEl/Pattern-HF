import type { Command } from "../Command";
import type { Stereo } from "./Stereo";

export class StereoOnForCommand implements Command {
  stereo:Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute(): void {
    this.stereo.on()
    this.stereo.setSd()
    this.stereo.setVolume(15)
  }


  undo(){
    this.stereo.off()
    this.stereo.removeCd()
    this.stereo.setVolume(0)
  }
}