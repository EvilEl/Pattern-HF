import type { Command } from '../Command'
import type { Tv } from './Tv'

export class TvOffCommand implements Command {
  tv: Tv
  constructor(tv: Tv) {
    this.tv = tv;
  }  

  execute() {
    return this.tv.off();
  }
  
  undo() {
    return this.tv.on();
  }
}