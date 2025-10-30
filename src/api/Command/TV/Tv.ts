export class Tv {
  room:string
  constructor(room:string) {
    this.room = room;
  }

  on(){
    console.log(`${this.room} TV is on`);
  }

  off(){
    console.log(`${this.room} TV is off`);
  }
}