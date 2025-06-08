import type { IMove } from "../../types";

export class Human {
  fullName: string;
  age: number
  moveBehavior: IMove
  constructor(fullName: string, age: number, move: IMove) {
    this.age = age
    this.fullName = fullName
    this.moveBehavior = move
  }

  move() {
    this.moveBehavior.move()
  }

  setMove(conceptMove: IMove) {
    this.moveBehavior = conceptMove
  }
}



export class Fast implements IMove {
  move() {
    console.log('я быстро пошел');
  }
}


export class Slow implements IMove {
  move() {
    console.log('я медленно иду');
  }
}

export class Running implements IMove {
  move() {
    console.log('я побежал');
  }
}


