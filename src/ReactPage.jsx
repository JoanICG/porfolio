import reactLogo from './assets/react.svg'
import { Link } from 'react-router-dom';
import './App.css'

function ReactPage() {
  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>This is the React Page</h1>
      <div className="card">
        <Link to="/">
          <button>
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default ReactPage