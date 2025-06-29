
export abstract class Pizza {
  name: string
  constructor() {
    this.name = ''
  }
  prepare() { }
  bake() { }
  cut() { }
  box() { }
  getName() {
    return this.name
  }
}
