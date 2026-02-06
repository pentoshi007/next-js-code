import { useCounterStore } from '../store/counterStore'

/**
 * CounterValue Component - Demonstrates Zustand's Selector Pattern
 * 
 * This component showcases one of Zustand's most powerful features:
 * selective state subscription using selectors.
 * 
 * Why use selectors?
 * - Performance optimization: Component only re-renders when selected state changes
 * - If other parts of the store change (e.g., new actions added), this component won't re-render
 * - Prevents unnecessary re-renders in large applications with complex state
 */
export const CounterValue = () => {
    /**
     * Selector Pattern Explained:
     * 
     * useCounterStore((state) => state.count) - This is a SELECTOR function
     * 
     * How it works:
     * 1. The function receives the entire store state as an argument
     * 2. It returns only the piece of state we care about (count)
     * 3. Zustand uses shallow comparison to detect changes
     * 4. Component ONLY re-renders if the returned value changes
     * 
     * Without selector (less optimal):
     *   const { count } = useCounterStore()  
     *   // This subscribes to the ENTIRE store - any change causes re-render
     * 
     * With selector (optimal - what we're doing here):
     *   const count = useCounterStore((state) => state.count)
     *   // Only subscribes to 'count' - only count changes cause re-render
     * 
     * Note: The selector returns the value directly, not an object!
     * So we use: const count = ... (not: const { count } = ...)
     */
    const count = useCounterStore((state) => state.count)

    return (
        <h2>Counter Value: {count}</h2>
    )
}