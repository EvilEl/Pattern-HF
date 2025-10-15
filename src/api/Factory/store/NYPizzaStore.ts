import { NewYorkPizzaIngredientFactory } from '../ingredient/NYPizzaIngredientFactory';
import type { PizzaIngredientFactory } from '../interface/PizzaIngredientFactory';
import { CheesePizza } from '../pizza/CheesePizza';
import { ClamPizza } from '../pizza/ClamPizza';
import { PepperoniPizza } from '../pizza/PepperoniPizza';
import { Pizza } from '../pizza/Pizza';
import { VeggiePizza } from '../pizza/VeggiePizza';
import { PizzaStore, type TypePizza, } from './PizzaStore'

export class NYPizzaStore extends PizzaStore {
  ingredientFactory:PizzaIngredientFactory
  constructor(){
    super()
    this.ingredientFactory = new NewYorkPizzaIngredientFactory()
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