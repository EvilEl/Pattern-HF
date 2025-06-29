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
  prepare() {
  }
  bake() {
  }
  cut() {

  }
  box() {

  }
}
class CHStyleVeggiePizza extends Pizza {
  prepare() {
  }
  bake() {
  }
  cut() {

  }
  box() {

  }
}
class CHStyleClamPizza extends Pizza {
  prepare() {
  }
  bake() {
  }
  cut() {

  }
  box() {

  }
}
class CHStylePepperoniPizza extends Pizza {
  prepare() {
  }
  bake() {
  }
  cut() {

  }
  box() {

  }
}


const chichagoPizza = new CHPizzaStore()

chichagoPizza.createPizza('cheese')