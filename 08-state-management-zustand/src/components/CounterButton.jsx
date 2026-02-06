import { useCounterStore } from '../store/counterStore'

/**
 * CounterButton Component - Demonstrates Action-Only Subscription Pattern
 * 
 * This component showcases an advanced Zustand optimization technique:
 * subscribing ONLY to actions (functions), not to state values.
 * 
 * Key Insight:
 * - Actions (increment, decrement, reset) are functions defined in the store
 * - Functions are created once when the store is initialized
 * - They are referentially stable (same reference across renders)
 * - Therefore, subscribing to them doesn't cause re-renders when state changes!
 */
export const CounterButton = () => {
    /**
     * Action-Only Selectors Explained:
     * 
     * Each selector below extracts ONLY an action function, not state values.
     * 
     * Why this matters for performance:
     * 1. When `count` changes in the store, this component does NOT re-render
     * 2. The action functions remain the same reference (they don't change)
     * 3. Zustand's shallow comparison sees no change → no re-render
     * 
     * Compare to Counter.jsx which uses:
     *   const { count, increment, decrement, reset } = useCounterStore()
     *   // This subscribes to EVERYTHING including `count`
     *   // So Counter.jsx re-renders on every count change
     * 
     * This pattern is perfect for:
     * - Button components that only trigger actions
     * - Form submit handlers
     * - Any component that doesn't need to display state values
     */
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    const reset = useCounterStore((state) => state.reset)

    /**
     * Pro Tip: You could also combine these into a single selector if preferred:
     * 
     * const { increment, decrement, reset } = useCounterStore((state) => ({
     *     increment: state.increment,
     *     decrement: state.decrement,
     *     reset: state.reset,
     * }), shallow)  // Note: `shallow` import from 'zustand/shallow' needed
     * 
     * The `shallow` comparison ensures the object is compared by its properties,
     * not by reference, preventing unnecessary re-renders.
     */

    return (
        <div className="counter-button">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

/**
 * Summary - Why This Component is Optimized:
 * 
 * This component will NOT re-render when the `count` value changes!
 * It only subscribes to action functions, which are stable references.
 * 
 * Use this pattern when:
 * - A component only needs to TRIGGER state changes
 * - A component doesn't need to DISPLAY state values
 * - You want to minimize unnecessary re-renders in your app
 * 
 * Contrast with CounterValue.jsx which ONLY subscribes to `count`
 * and re-renders when count changes (which is exactly what it needs).
 */