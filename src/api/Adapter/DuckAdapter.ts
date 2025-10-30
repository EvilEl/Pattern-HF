import type { Duck } from "./interface/Duck"
import type { Turkey } from "./interface/Turkey"

export class DuckAdapter implements Turkey {
  duck: Duck
  random: number
  constructor(duck: Duck) {
    this.duck = duck
    this.random = Math.floor(Math.random() * 5)
  }
  gobble() {
    this.duck.quack()
  }
  fly() {
    if(this.random === 0) {
      this.duck.fly()
    }
  }
}