export class Singleton {
  private static uniqueInstance:Singleton | null
  
  private constructor(){
    
  }

 static getInstance(){
  if(!(this.uniqueInstance instanceof Singleton)){
    this.uniqueInstance = new Singleton()
  } 
  return this.uniqueInstance
  }
}

export class ChocolateBoiler {
  private static uniqueInstance:ChocolateBoiler | null
  private empty: boolean = true
  private boiled: boolean = false

  private constructor(){
  }
  getInstance(){
    if(!(ChocolateBoiler.uniqueInstance instanceof ChocolateBoiler)){
      ChocolateBoiler.uniqueInstance = new ChocolateBoiler()
    }
    return ChocolateBoiler.uniqueInstance
  }

  public isEmpty():boolean {
    return this.empty
  }

  public isBoiled():boolean {
    return this.boiled
  }

  public fill() {
    if(this.isEmpty()) {
      this.empty = false
      this.boiled = false
    }
  }
}

export class ChocolateBoilerTwo {
  private static readonly uniqueInstance:ChocolateBoilerTwo = new ChocolateBoilerTwo()
  private empty: boolean = true
  private boiled: boolean = false

  private constructor(){
    console.log('im here',ChocolateBoilerTwo.uniqueInstance)
  }
  static getInstance(){
    return ChocolateBoilerTwo.uniqueInstance
  }

  public isEmpty():boolean {
    return this.empty
  }

  public isBoiled():boolean {
    return this.boiled
  }

  public fill() {
    if(this.isEmpty()) {
      this.empty = false
      this.boiled = false
    }
  }
}