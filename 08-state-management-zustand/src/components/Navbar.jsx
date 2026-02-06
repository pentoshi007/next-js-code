import { useAppStore } from '../store/appStore'

/**
 * Navbar Component - Demonstrates Zustand's Slice Pattern
 * 
 * This component showcases Zustand's powerful feature:
 * creating "slices" of state management.
 * 
 * Why use slices?
 * - Organize state into logical groups (auth, theme, etc.)
 * - Prevent state bloat in a single store
 */

export const Navbar = () => {
    const { theme, toggleTheme } = useAppStore()
    const user = useAppStore((state) => state.user)
    const login = useAppStore((state) => state.login)
    const logout = useAppStore((state) => state.logout)

    return (
        <nav className={theme}>
            <h1>Navbar</h1>
            <p>Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {user ? (
                <div>
                    <span>Welcome, {user.name || 'User'}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={() => login({ name: 'Guest' })}>Login</button>
            )}
        </nav>
    )
}
