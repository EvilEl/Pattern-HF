import type { PizzaIngredientFactory } from "../interface/PizzaIngredientFactory";
import { Pizza } from "./Pizza";

export class VeggiePizza extends Pizza {
  ingredientFactory:PizzaIngredientFactory

  constructor(ingredientFactory:PizzaIngredientFactory){
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.veggies = this.ingredientFactory.createVeggies()
  }
}