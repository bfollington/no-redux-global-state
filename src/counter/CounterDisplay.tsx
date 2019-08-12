import React from 'react'
import { useCounter } from './counterState'

const CounterDisplay = () => {
  const { state } = useCounter()

  return (
    <>
      <label>Another count: {state.count}</label>
    </>
  )
}

export default CounterDisplay
