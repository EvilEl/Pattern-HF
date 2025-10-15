import type { PizzaIngredientFactory } from "../interface/PizzaIngredientFactory";
import { Pizza } from "./Pizza";

export class CheesePizza extends Pizza {
  ingredientFactory:PizzaIngredientFactory

  constructor(ingredientFactory:PizzaIngredientFactory){
    super()
    console.log('ingredientFactory',ingredientFactory)
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
  }
}