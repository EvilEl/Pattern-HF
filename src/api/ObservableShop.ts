import type { IObservable, IObserver } from "../types";

export class ObservableShop<K> implements IObservable<K> {
  subscribers: Map<K, IObserver>
  book: number
  constructor() {
    this.subscribers = new Map()
    this.book = 0
  }

  addedSubscribe(key: K, value: IObserver) {
    this.subscribers.set(key, value)
  }

  removeSubscribe(key: K) {
    this.subscribers.delete(key)
  }

  notifySubscribers() {
    const keys = this.subscribers.keys()
    Array.from(keys).forEach(key => {
      const sub = this.subscribers.get(key)
      sub?.update(this.book)
    })
  }

  setBook(count: number) {
    this.book = count
    this.notifySubscribers()
  }
}







