import { Pizza } from '../pizza/Pizza';
import { PizzaStore, type TypePizza } from './PizzaStore'
import { ChicagoPizzaIngredientFactory } from '../ingredient/CHPizzaIngredientFactory';
import { CheesePizza } from '../pizza/CheesePizza';
import { ClamPizza } from '../pizza/ClamPizza'
import { VeggiePizza } from '../pizza/VeggiePizza';
import { PepperoniPizza } from '../pizza/PepperoniPizza';
import type { PizzaIngredientFactory } from '../interface/PizzaIngredientFactory';

export class CHPizzaStore extends PizzaStore {
  ingredientFactory:PizzaIngredientFactory
  constructor(){
    super()
    this.ingredientFactory = new ChicagoPizzaIngredientFactory()
  }

  createPizza(item: TypePizza): Pizza | null {
    if (item === "cheese") {
      return new CheesePizza(this.ingredientFactory);
    } else if (item === "veggie") {
      return new VeggiePizza(this.ingredientFactory);
    } else if (item === "clam") {
      return new ClamPizza(this.ingredientFactory);
    } else if (item === "pepperoni") {
      return new PepperoniPizza(this.ingredientFactory);
    } else return null;
  }
}
