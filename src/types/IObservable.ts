import type { IObserver } from "./iObserver"


export interface IObservable<K> {
  addedSubscribe: (key: K, value: IObserver) => void
  removeSubscribe: (key: K) => void
  notifySubscribers: () => void
}


