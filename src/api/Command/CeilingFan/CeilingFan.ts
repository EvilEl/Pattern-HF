export const ENUM_CEILING_FAN_SPEED = Object.freeze({
  OFF: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
})

export type AllSpeedCeilingFan = typeof ENUM_CEILING_FAN_SPEED[keyof  typeof ENUM_CEILING_FAN_SPEED]

export class CeilingFan {
  room:string
  speed:AllSpeedCeilingFan
  constructor(room:string){
    this.room = room
    this.speed = 0
  }
  high(){
    this.speed = 3
    console.log('CeilingFan high');
  }

  medium(){
    this.speed = 2
    console.log('CeilingFan medium');
  }

  low(){
    this.speed = 1
    console.log('CeilingFan low');
  }

  off(){
    this.speed = 0
    console.log('CeilingFan off');
  }

  getSpeed(){
    return this.speed
  }
}