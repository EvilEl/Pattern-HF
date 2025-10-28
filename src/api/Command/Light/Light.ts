export class Light {
  room:string
  constructor(room:string){
    this.room = room
  }
  on() {
    console.log('light on')
  }
  off() {
    console.log('light off')
  }
}