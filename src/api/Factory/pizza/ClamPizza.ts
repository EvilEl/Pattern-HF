import { Pizza } from "./Pizza"
import type { PizzaIngredientFactory } from "../interface/PizzaIngredientFactory"

export class ClamPizza extends Pizza{
  ingredientFactory:PizzaIngredientFactory

  constructor(ingredientFactory:PizzaIngredientFactory){
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(){
    this.cheese = this.ingredientFactory.createSauce() 
    this.clam = this.ingredientFactory.createClam() 
    this.sauce = this.ingredientFactory.createSauce() 
    this.dough = this.ingredientFactory.createDough() 
  }
}