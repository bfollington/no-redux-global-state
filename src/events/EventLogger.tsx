import React from 'react'
import { tap, filter } from 'rxjs/operators'
import { useSideEffect } from './useEvents'

const EventLogger = () => {
  useSideEffect($e => $e.pipe(tap(x => console.log(x))))

  useSideEffect(($e, emit) =>
    $e.pipe(
      filter(x => x === 'counter/reached-10'),
      tap(x => emit('woah-nelly'))
    )
  )

  return <></>
}

export default EventLogger
