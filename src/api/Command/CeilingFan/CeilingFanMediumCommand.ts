import type { Command } from "../Command"
import type { CeilingFan } from "./CeilingFan"

export class CeilingFanMediumCommand implements Command {
    ceilingFan: CeilingFan
    prevSpeed: number = 0

    constructor(ceilingFan:CeilingFan){
        this.ceilingFan = ceilingFan  
    }

}