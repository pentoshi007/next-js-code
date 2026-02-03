import React from 'react'
import { useTheme } from './ThemeContext'

// This component is responsible for:
// - Reading the current theme from context
// - Giving the user a button to toggle the theme
//
// Notice that we do NOT receive any "theme" props from a parent.
// Instead, we read the data directly from ThemeContext using the custom hook.
const ThemeToggler = () => {
    // useTheme() is a tiny wrapper around useContext(ThemeContext).
    // It gives us the "shared" theme state managed by ThemeProvider.
    const { isDark, toggleTheme } = useTheme()

    return (
        <section id="theme" style={{ marginTop: '2.5rem' }}>
            <h2>Theme toggler with Context API</h2>

            <p style={{ maxWidth: 520, margin: '0.5rem auto 1rem', lineHeight: 1.5 }}>
                <strong>Context API idea:</strong> instead of passing <code>theme</code>{' '}
                and <code>setTheme</code> through props multiple levels down (prop
                drilling), we store them in a context. Any component can read or update
                the theme by using that context.
            </p>

            <p style={{ marginBottom: '0.75rem' }}>
                Current theme:{' '}
                <strong>{isDark ? 'Dark mode 🌙' : 'Light mode ☀️'}</strong>
            </p>

            <button
                onClick={toggleTheme}
                style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '999px',
                    border: 'none',
                    backgroundColor: '#111827',
                    color: 'white',
                    cursor: 'pointer',
                }}
            >
                Toggle theme
            </button>
        </section>
    )
}

export default ThemeToggler
