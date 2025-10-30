import type { Command } from '../Command';
import { Hottub } from './Hottub';

export class HottubOffCommand implements Command {
	hottub:Hottub

  constructor(hottub:Hottub){
    this.hottub = hottub
  }
  execute() {
    this.hottub.off()
  }
  undo() {
    this.hottub.on()
  }
} 