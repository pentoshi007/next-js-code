import { create } from 'zustand'

/**
 * Counter Store using Zustand
 * 
 * Zustand is a small, fast state management library for React.
 * 
 * How it works:
 * - `create` is a function from Zustand that creates a store (a hook)
 * - `set` is a function provided by Zustand to update the store's state
 * - `state` in the updater function represents the current state of the store
 * 
 * When you call `set((state) => newState)`:
 * 1. Zustand passes the current state to your updater function
 * 2. You return the new state (or partial state to merge)
 * 3. Zustand updates the store and re-renders any components using this state
 */
export const useCounterStore = create((set) => ({
    // Initial state: count starts at 0
    count: 0,

    // Action to increment count by 1
    // `state` here is the current store state { count: <currentValue> }
    // We return a new object with the updated count
    increment: () => set((state) => ({ count: state.count + 1 })),

    // Action to decrement count by 1
    // Same pattern: read current state, return new state
    decrement: () => set((state) => ({ count: state.count - 1 })),

    // Action to reset count to 0
    // When setting a fixed value, we don't need the current state
    // So we can just pass the new state object directly
    reset: () => set({ count: 0 }),
    // reset:()=>set((state)=>({count:state.count+1})), // this is also a valid way to reset the count to 0 
}));