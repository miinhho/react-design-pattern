import { useState } from 'react'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

interface CounterProps {
  initialValue?: number
  children: (state: CounterState) => React.ReactNode
}

const Counter = ({ initialValue = 0, children }: CounterProps) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(initialValue)

  const counterState: CounterState = {
    count,
    increment,
    decrement,
    reset,
  }

  return children(counterState)
}

export default Counter
