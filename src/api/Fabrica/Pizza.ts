
export abstract class Pizza {
  name: string
  constructor() {
    this.name = ''
  }
  abstract prepare(): void
  abstract bake(): void
  abstract cut(): void
  abstract box(): void

  getName() {
    return this.name
  }
}
