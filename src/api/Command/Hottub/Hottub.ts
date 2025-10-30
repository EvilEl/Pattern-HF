export class Hottub {
  room:string
  constructor(room:string){
    this.room = room
  }

  on(){
    console.log(`${this.room} hottub is on`)
  }

  off(){
    console.log(`${this.room} hottub is off`)
  }
}