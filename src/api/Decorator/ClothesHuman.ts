import { ref, watch, type Ref } from 'vue'

abstract class Human {
  public clothesMap: Ref<Map<any, any>>
  public clothes: Ref<string>
  constructor() {
    this.clothesMap = ref(new Map())
    this.clothes = ref('')
    watch(this.clothesMap, () => {
      console.log('im here');
    })
  }
  public getDressed(): void {
    if (this.clothesMap.value.size === 0) {
      this.clothes.value = 'Я голый'
      return
    }
    const items = Array.from(this.clothesMap.value.values())
    this.clothes.value = 'Моя одежда: ' + items.join(', ')
  }


}

abstract class ClothesDecorator extends Human {
  human: Human
  public clothesMap: Ref<Map<any, any>>
  public clothes: Ref<string>
  public abstract putOnClothes(key?: string): void
  public abstract unClothe(key?: string): void
  constructor(human: Human) {
    super()
    this.human = human
    this.clothesMap = human.clothesMap
    this.clothes = human.clothes
  }
}


export class MichaelHuman extends Human {
  constructor() {
    super()
  }
}

export class Shoes extends ClothesDecorator {
  constructor(human: Human) {
    super(human)
    this.putOnClothes('обувь')
  }

  putOnClothes(key: string) {
    this.clothesMap.value.set(key, 'Кроссовки')
  }
  unClothe(key: string) {
    this.clothesMap.value.delete(key)
  }

  getDressed() {
    this.human.getDressed()
  }
}

export class Shirt extends ClothesDecorator {
  constructor(human: Human) {
    super(human)
    this.putOnClothes('верх')
  }
  putOnClothes(key: string) {
    this.clothesMap.value.set(key, 'Рубашка')
  }
  unClothe(key: string) {
    this.clothesMap.value.delete(key)
  }
  getDressed() {
    this.human.getDressed()
  }
}



