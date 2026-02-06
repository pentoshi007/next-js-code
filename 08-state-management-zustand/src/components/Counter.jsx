import { useCounterStore } from '../store/counterStore'

export const Counter = () => {
    const { count, increment, decrement, reset } = useCounterStore()
    return (
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button className="increment" onClick={increment}>Increment</button>
            <button className="decrement" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

