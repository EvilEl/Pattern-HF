import type { IObserver } from "../types";
import { ref, type Ref } from 'vue'
import type { ObservableShop } from "./ObservableShop";

export class UserOne implements IObserver {
  private _book: Ref<number>
  private shopData: ObservableShop<string>
  constructor(shopData: ObservableShop<string>) {
    this._book = ref(0)
    this.shopData = shopData
    this.shopData.addedSubscribe('UserOne', this)
  }
  public update() {
    this._book.value = this.shopData.getBook()
  }

  public removeSubscribe() {
    this.shopData.removeSubscribe('UserOne')
  }

  public addedSubscribe() {
    this.shopData.addedSubscribe('UserOne', this)
  }

  get book() {
    return this._book
  }
}