import { Pizza } from './Pizza';
import { PizzaStore, } from './PizzaStore'



export class NYPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza | null {
    if (item === "cheese") {
      return new NYStyleCheesePizza();
    } else if (item === "veggie") {
      return new NYStyleVeggiePizza();
    } else if (item === "clam") {
      return new NYStyleClamPizza();
    } else if (item === "pepperoni") {
      return new NYStylePepperoniPizza();
    } else return null;
  }
}

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'CheesePizza'
  }
}
class NYStyleVeggiePizza extends Pizza {

}
class NYStyleClamPizza extends Pizza {

}
class NYStylePepperoniPizza extends Pizza {

}



