import { Pizza } from './Pizza';
import { PizzaStore, type TypePizza } from './PizzaStore'

export class CHPizzaStore extends PizzaStore {
  createPizza(item: TypePizza): Pizza | null {
    if (item === "cheese") {
      return new CHStyleCheesePizza();
    } else if (item === "veggie") {
      return new CHStyleVeggiePizza();
    } else if (item === "clam") {
      return new CHStyleClamPizza();
    } else if (item === "pepperoni") {
      return new CHStylePepperoniPizza();
    } else return null;
  }
}

class CHStyleCheesePizza extends Pizza {

}
class CHStyleVeggiePizza extends Pizza {

}
class CHStyleClamPizza extends Pizza {

}
class CHStylePepperoniPizza extends Pizza {

}


const chichagoPizza = new CHPizzaStore()

chichagoPizza.createPizza('cheese')