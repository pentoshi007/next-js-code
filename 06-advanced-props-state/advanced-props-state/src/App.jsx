import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler from './components/ThemeToggler'
import { ThemeProvider, useTheme } from './components/ThemeContext'
import './App.css'

function Navigation() {
  // Read the current theme from our shared ThemeContext instead of hard-coding it.
  // Because Navigation is below ThemeProvider in the tree, it can access this value.
  const { isDark } = useTheme()
  const sections = [
    {
      id: "basic", label: 'Basic Props', icon: "<FaReact />"
    },
    {
      id: "children", label: 'Children Props', icon: "<FaReact />"
    },
    {
      id: "complex", label: 'Complex Props', icon: "<FaReact />"
    },
    {
      id: 'ref',
      label: 'Ref Props',
      icon: '<FaReact />',
    },
    {
      id: 'theme',
      label: 'Theme (Context API)',
      icon: '<FaReact />',
    },
  ]

  return (
    <nav className={isDark ? 'dark' : 'light'}>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// This component consumes the theme and applies a class to the main layout,
// so the whole page (not just the navbar) reacts to light/dark mode.
function AppContent() {
  const { isDark } = useTheme()

  return (
    <div className={isDark ? 'app-dark' : 'app-light'}>
      <Navigation />
      <h1>Basic Props</h1>

      {/* Section demonstrating useRef + forwardRef with an input box */}
      <RefProps />

      {/* Section demonstrating Context API with a shared theme */}
      <ThemeToggler />
    </div>
  )
}

function App() {
  // ThemeProvider still owns the shared theme state and wraps everything
  // that needs access. AppContent reads that value and sets layout classes.
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
