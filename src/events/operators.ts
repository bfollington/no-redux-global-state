import { filter, tap, switchMap, take } from 'rxjs/operators'
import { Event } from './events'
import { Observable } from 'rxjs'

export const ofType = (e: Event) => filter<Event>(x => x === e)
export const log = (label: string) =>
  tap((...args: any[]) => console.log(label, ...args))

export const waitFor = (e$: Observable<Event>) => (type: Event) =>
  switchMap(() =>
    e$.pipe(
      ofType(type),
      take(1)
    )
  )
