import type { IObservable, IObserver } from "../../types";

export class ObservableShop<K> implements IObservable<K> {
  private subscribers: Map<K, IObserver>
  private book: number
  constructor() {
    this.subscribers = new Map()
    this.book = 0
  }

  public addedSubscribe(key: K, value: IObserver) {
    this.subscribers.set(key, value)
  }

  public removeSubscribe(key: K) {
    this.subscribers.delete(key)
  }

  public notifySubscribers() {
    this.subscribers.forEach(subscriber => {
      subscriber.update();
    });
  }


  public getBook() {
    return this.book
  }

  public setBook(count: number) {
    this.book = count
    this.notifySubscribers()
  }
}