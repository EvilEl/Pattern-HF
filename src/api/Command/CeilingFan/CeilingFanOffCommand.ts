import { ENUM_CEILING_FAN_SPEED, type AllSpeedCeilingFan, type CeilingFan } from "./CeilingFan"

export class CeilingFanOffCommand {
  ceilingFan: CeilingFan
  prevSpeed: AllSpeedCeilingFan = 0

  constructor(ceilingFan:CeilingFan){
    this.ceilingFan = ceilingFan
  }

  execute(){
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.off()
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