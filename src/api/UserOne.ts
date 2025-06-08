import type { IObserver } from "../types";
import { ref, type Ref } from 'vue'
import type { ObservableShop } from "./ObservableShop";

export class UserOne implements IObserver {
  private _book: Ref<number>
  shopData: ObservableShop<string>
  constructor(shopData: ObservableShop<string>) {
    this._book = ref(0)
    this.shopData = shopData
    this.shopData.addedSubscribe('UserOne', this)
  }
  update(book: number) {
    this._book.value = book
  }

  removeSubscribe() {
    this.shopData.removeSubscribe('UserOne')
  }

  addedSubscribe() {
    this.shopData.addedSubscribe('UserOne', this)
  }

  get book() {
    return this._book
  }
}