'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Neural Network Node Component
function NeuralNode({ position, index }: { position: [number, number, number]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.3
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
      
      // Pulsing effect
      const scale = hovered ? 1.5 : 1 + Math.sin(time * 2 + index) * 0.2
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial
        color={hovered ? '#a855f7' : '#06b6d4'}
        emissive={hovered ? '#a855f7' : '#06b6d4'}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Connection Line Component
function Connection({ start, end, index }: { start: [number, number, number]; end: [number, number, number]; index: number }) {
  const lineRef = useRef<THREE.Line>(null)
  
  const points = useMemo(() => [start, end], [start, end])
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(
      points.map(p => new THREE.Vector3(...p))
    )
    return geom
  }, [points])

  useFrame((state) => {
    if (lineRef.current) {
      const time = state.clock.getElapsedTime()
      const opacity = 0.3 + Math.sin(time * 2 + index) * 0.2
      if (lineRef.current.material instanceof THREE.LineBasicMaterial) {
        lineRef.current.material.opacity = opacity
      }
    }
  })

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        color="#06b6d4"
        transparent
        opacity={0.3}
        linewidth={1}
      />
    </line>
  )
}

// Neural Network Component
function NeuralNetwork() {
  const nodes = useMemo(() => {
    const nodeCount = 30
    const nodes: [number, number, number][] = []
    const connections: Array<{ start: [number, number, number]; end: [number, number, number] }> = []
    
    // Create nodes in a layered structure
    for (let layer = 0; layer < 3; layer++) {
      const layerNodes = 10
      for (let i = 0; i < layerNodes; i++) {
        const x = (i - layerNodes / 2) * 1.5
        const y = (layer - 1) * 2
        const z = (Math.random() - 0.5) * 2
        nodes.push([x, y, z])
      }
    }
    
    // Create connections between layers
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        )
        if (distance < 2.5 && Math.random() > 0.7) {
          connections.push({ start: nodes[i], end: nodes[j] })
        }
      }
    }
    
    return { nodes, connections }
  }, [])

  return (
    <>
      {nodes.nodes.map((node, i) => (
        <NeuralNode key={i} position={node} index={i} />
      ))}
      {nodes.connections.map((conn, i) => (
        <Connection key={i} start={conn.start} end={conn.end} index={i} />
      ))}
    </>
  )
}

// Floating Particles
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 1500
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    const color1 = new THREE.Color('#06b6d4')
    const color2 = new THREE.Color('#a855f7')
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30
      positions[i + 1] = (Math.random() - 0.5) * 30
      positions[i + 2] = (Math.random() - 0.5) * 30
      
      const color = Math.random() > 0.5 ? color1 : color2
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }
    
    return { positions, colors }
  }, [])

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(particles.positions, 3))
    geom.setAttribute('color', new THREE.BufferAttribute(particles.colors, 3))
    return geom
  }, [particles])

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.08,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02
      ref.current.rotation.y += delta * 0.03
    }
  })

  return (
    <points ref={ref} geometry={geometry} material={material} frustumCulled={false} />
  )
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <NeuralNetwork />
        <FloatingParticles />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 10, 0]} intensity={0.6} color="#ec4899" />
      </Canvas>
    </div>
  )
}

