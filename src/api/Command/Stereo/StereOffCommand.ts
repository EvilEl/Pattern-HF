import type { Command } from "../Command";
import type { Stereo } from "./Stereo";

export class StereOff implements Command {
  stereo:Stereo
  constructor(stereo: Stereo) {
    this.stereo = stereo
  }
  execute() {
    this.stereo.off()
  }
}