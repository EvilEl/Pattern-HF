import type { IObserver } from "./iObserver"


export interface IObservable<K> {
  subscribers: Map<K, IObserver>
  addedSubscribe: (key: K, value: IObserver) => void
  removeSubscribe: (key: K) => void
  notifySubscribers: () => void
}


