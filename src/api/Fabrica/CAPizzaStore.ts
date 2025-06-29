import { Pizza } from './Pizza';
import { PizzaStore, } from './PizzaStore'

export class CAPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza | null {
    if (item === "cheese") {
      return new CAStyleCheesePizza();
    } else if (item === "veggie") {
      return new CAStyleVeggiePizza();
    } else if (item === "clam") {
      return new CAStyleClamPizza();
    } else if (item === "pepperoni") {
      return new CAStylePepperoniPizza();
    } else return null;
  }
}

class CAStyleCheesePizza extends Pizza {

}
class CAStyleVeggiePizza extends Pizza {

}
class CAStyleClamPizza extends Pizza {

}
class CAStylePepperoniPizza extends Pizza {

}