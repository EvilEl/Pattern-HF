
export abstract class Pizza {
  name: string
  dough:string
  sauce:string
  veggies:string[]
  cheese:string
  pepperoni:string
  clam:string

  constructor() {
    this.name  = ''
    this.dough = ''
    this.sauce = ''
    this.veggies = []
    this.cheese = ''
    this.pepperoni = ''
    this.clam = ''
  }

  abstract prepare():void

  bake() {}
  cut() {}
  box() {}
  getName() {
    return this.name
  }
}
