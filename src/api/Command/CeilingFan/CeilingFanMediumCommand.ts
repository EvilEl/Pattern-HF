import type { Command } from "../Command"
import { ENUM_CEILING_FAN_SPEED, type CeilingFan } from "./CeilingFan"

export class CeilingFanMediumCommand implements Command  {
  ceilingFan: CeilingFan
  prevSpeed: number = 2

  constructor(ceilingFan:CeilingFan){
    this.ceilingFan = ceilingFan
  }

  execute(){
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.medium()
  }

  undo(){
    if(this.prevSpeed === ENUM_CEILING_FAN_SPEED.OFF){
      this.ceilingFan.off()
    }else if(this.prevSpeed === ENUM_CEILING_FAN_SPEED.LOW){
      this.ceilingFan.low()
    }else if(this.prevSpeed === ENUM_CEILING_FAN_SPEED.MEDIUM){
      this.ceilingFan.medium()
    }else if(this.prevSpeed === ENUM_CEILING_FAN_SPEED.HIGH){
      this.ceilingFan.high()
    }
  }
}