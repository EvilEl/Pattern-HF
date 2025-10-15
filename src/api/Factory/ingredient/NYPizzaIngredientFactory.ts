import type { PizzaIngredientFactory } from "../interface/PizzaIngredientFactory"

export class NewYorkPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough():string{
    return ''
    // return new ThickCrustDough() 
  }
  createSauce(){
    return ''
    // return new PlumTomatoSauce()
  }
  createCheese(){
    return ''
    // return new MozzarellaCheese()
  }
  createVeggies(){
    return []
    // const veggies = [new BlackOlives(),new Spinach(),new EggPlant()]
    // return veggies
  }
  createPepperoni(){
    return ''
    // return new SlicedPepperoni()
  }
  createClam(){
    return ''
    // return new FrozenCalms()
  }
}