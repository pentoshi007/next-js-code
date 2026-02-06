
import './App.css'
import { Counter } from './components/Counter'
import { Navbar } from './components/Navbar'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <h1>State Management with Zustand</h1>
      <Counter />
      <Navbar />
      <Posts />
    </>
  )
}

export default App
