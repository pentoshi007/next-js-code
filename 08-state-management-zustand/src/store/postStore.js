import { create } from 'zustand'

/**
 * Post Store - Demonstrates Async State Management with Zustand
 * 
 * This store showcases how Zustand elegantly handles:
 * - Async operations (API calls)
 * - Loading states for UI feedback
 * - Error handling and display
 * - Data fetching patterns
 * 
 * Key Concept: Async Actions in Zustand
 * Unlike Redux (which needs middleware like thunk/saga), Zustand supports
 * async functions directly in the store - no extra setup required!
 */
export const usePostStore = create((set) => ({
    /**
     * State Shape:
     * - posts: Array of fetched posts from the API
     * - loading: Boolean flag to show loading UI
     * - error: String to hold error messages (null when no error)
     */
    posts: [],
    loading: false,
    error: null,

    /**
     * Async Action: fetchPosts
     * 
     * This demonstrates Zustand's native async support:
     * 1. Simply define an async function as an action
     * 2. Call `set()` at any point to update state
     * 3. No middleware, no thunks, no sagas needed!
     * 
     * Pattern Used: Loading → Success/Error → Complete
     * This is a common pattern for handling async operations:
     * - Set loading=true before the request
     * - On success: update data
     * - On error: capture error message
     * - Finally: set loading=false regardless of outcome
     */
    fetchPosts: async () => {
        // Step 1: Initialize loading state, clear any previous errors
        set({ loading: true, error: null })

        try {
            // Step 2: Make the API call
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

            // Step 3: Check if the response is successful
            if (!response.ok) {
                throw new Error(`Failed to fetch posts (${response.status})`)
            }

            // Step 4: Parse JSON and update state with fetched data
            const data = await response.json()
            set({ posts: data })

        } catch (error) {
            // Step 5: Handle any errors that occurred
            // We store the error message string, not the full error object
            set({ error: error.message })

        } finally {
            // Step 6: Always turn off loading, whether success or failure
            // The `finally` block ensures this runs no matter what
            set({ loading: false })
        }
    }
}))