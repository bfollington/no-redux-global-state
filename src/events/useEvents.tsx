import {
  createContext,
  default as React,
  useContext,
  useMemo,
  useEffect,
} from 'react'
import { from, Observable, Subject, OperatorFunction } from 'rxjs'
import { Event } from './events'
import { waitFor } from './operators'

type EventContextValue = {
  $events: Observable<Event>
  emit: (e: Event) => void
}

const EventContext = createContext<EventContextValue>({
  $events: from([] as Event[]),
  emit: e => {},
})

export const useEvents = () => {
  const context = useContext(EventContext)

  if (!context) {
    throw new Error(`useCounter must be used within a CounterProvider`)
  }

  return context
}

export const EventProvider = (props: any) => {
  const value = useMemo(() => {
    const subject = new Subject<Event>()

    return {
      $events: subject,
      emit: (v: Event) => {
        subject.next(v)
      },
    }
  }, [])

  return <EventContext.Provider value={value} {...props} />
}

// For listening to the event stream and acting accordingly
export const useSideEffect = (
  f: (
    e$: Observable<Event>,
    emit: (e: Event) => void,
    waitFor: (e: Event) => OperatorFunction<unknown, Event>
  ) => Observable<Event>
) => {
  const { $events, emit } = useEvents()

  useEffect(() => {
    const w = waitFor($events)
    const sub = f($events, emit, w).subscribe()
    console.warn('SUBBED TO STREAM')

    return () => {
      sub.unsubscribe()
      console.warn('UNSUBBED FROM STREAM')
    }
  }, [f, emit, $events])
}
