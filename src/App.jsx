import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Personal porfolio in </h1>
      <progress></progress>
      <div className="card">
        <Link to="/react">
          <button>
            Go to React Page
          </button>
        </Link>
      </div>
      <p className="read-the-docs">
        Work in progress
      </p>
    </>
  )
}

export default App
