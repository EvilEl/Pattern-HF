//абстрактная фабрика
export interface PizzaIngredientFactory{
  createDough():string
  createSauce():string
  createCheese():string
  createVeggies():string[]
  createPepperoni():string
  createClam():string
}