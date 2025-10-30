import type { Command } from '../Command';
import { Hottub } from './Hottub';

export class HottubOnCommand implements Command {
  hottub:Hottub

  constructor(hottub:Hottub){
    this.hottub = hottub
  }
  execute() {
    this.hottub.on()
  }
  undo() {
    this.hottub.off()
  }
} 