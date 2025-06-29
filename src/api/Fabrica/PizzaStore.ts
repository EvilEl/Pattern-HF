import { Pizza } from "./Pizza";


export type TypePizza = 'veggie' | 'clam' | 'pepperoni' | 'cheese'

export abstract class PizzaStore {
  protected abstract createPizza(type: string): Pizza | null

  public orderPizza(type: TypePizza) {
    const pizza = this.createPizza(type)
    if (!pizza) {
      throw new Error('not found type Pizza')
    }
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza
  }
}
