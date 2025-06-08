import type { IObserver } from "../types";
import { ref, type Ref } from 'vue'
import type { ObservableShop } from "./ObservableShop";

export class UserTwo implements IObserver {
  private _book: Ref<number>
  shopData: ObservableShop<string>
  constructor(shopData: ObservableShop<string>) {
    this._book = ref(0)
    this.shopData = shopData
    this.shopData.addedSubscribe('UserTwo', this)
  }
  update(book: number) {
    this._book.value = book
  }

  removeSubscribe() {
    this.shopData.removeSubscribe('UserTwo')
  }

  addedSubscribe() {
    this.shopData.addedSubscribe('UserTwo', this)
  }

  get book() {
    return this._book
  }
}