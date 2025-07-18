import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model.jsx'; // Import your new model component
import './App.css'

function ReactPage() {
  return (
    <>
      <div style={{ width: '100%', height: '400px', cursor: 'grab' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          {/* Add some lighting so we can see the model */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} />
          
          <Suspense fallback={null}>
            {/* Add the model */}
            <Model />
          </Suspense>

          {/* This allows you to control the camera by dragging */}
          <OrbitControls />
        </Canvas>
      </div>
      <h1>This is the React Page with a Custom 3D Model</h1>
      <p className="read-the-docs">
        Drag the model to rotate it
      </p>
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