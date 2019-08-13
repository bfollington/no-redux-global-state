import { filter, tap } from 'rxjs/operators'
import { Event } from './events'

export const ofType = (e: Event) => filter<Event>(x => x === e)
export const log = (label: string) =>
  tap((...args: any[]) => console.log(label, ...args))
