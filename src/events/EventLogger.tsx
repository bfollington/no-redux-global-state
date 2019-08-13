import React from 'react'
import { tap, delay } from 'rxjs/operators'
import { ofType, log } from './operators'
import { useSideEffect } from './useEvents'

const EventLogger = () => {
  useSideEffect($e => $e.pipe(log('LOGGER')))

  useSideEffect(($e, emit) =>
    $e.pipe(
      ofType('counter/reached-10'),
      delay(1000),
      tap(x => emit('woah-nelly'))
    )
  )

  return <></>
}

export default EventLogger
