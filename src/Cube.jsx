import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function Cube() {
  // useRef gives us access to the mesh element
  const meshRef = useRef()

  // useFrame is a hook that runs on every single frame
  useFrame((state, delta) => {
    // Animate the cube's rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={'#8800ff'} />
    </mesh>
  )
}