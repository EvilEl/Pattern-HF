import type { Command } from "../Command";
import type { Tv } from "./Tv";

export class TvOnCommand implements Command {
    tv: Tv;
    constructor(tv: Tv){
      this.tv = tv
    }
    execute(){
      this.tv.on();
    }
    undo(){
      this.tv.off();
    }
}