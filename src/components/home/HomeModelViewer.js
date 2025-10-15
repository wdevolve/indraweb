'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, isHovered, isDragging, setSide }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  const { camera } = useThree();

useFrame(() => {
  if (!modelRef.current) return;

  // Apply auto-rotation
  if (!isHovered && !isDragging) {
    modelRef.current.rotation.y += 0.005;
  }

  const model = modelRef.current;

  // Get model's local axes in world space
  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(model.quaternion);
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(model.quaternion);
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(model.quaternion);

  // Vector from model to camera
  const modelPos = new THREE.Vector3();
  model.getWorldPosition(modelPos);

  const camPos = new THREE.Vector3();
  camera.getWorldPosition(camPos);

  const toCamera = camPos.sub(modelPos).normalize();

  // Compute dot products to determine which axis is most aligned with view
  const viewDot = {
    Front: forward.dot(toCamera),
    Back: forward.negate().dot(toCamera),
    Top: up.dot(toCamera),
    Bottom: up.negate().dot(toCamera),
    Right: right.dot(toCamera),
    Left: right.negate().dot(toCamera),
  };

  // Find max-aligned direction
  let bestSide = '';
  let maxDot = -Infinity;

  for (const [side, dot] of Object.entries(viewDot)) {
    if (dot > maxDot) {
      maxDot = dot;
      bestSide = side;
    }
  }

  setSide(bestSide);
});


  return <primitive object={scene} ref={modelRef} scale={2.5} />;
}


export default function ModelViewer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [side, setSide] = useState(null);

  return (
    <div>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '400px' }}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 0]} intensity={1} castShadow />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} />
        <pointLight position={[0, 3, -5]} intensity={0.5} color="#ffffff" />
        <hemisphereLight skyColor={'#e0e0ff'} groundColor={'#080808'} intensity={0.4} />

        <Model
          url="/models/crate.glb"
          isHovered={isHovered}
          isDragging={isDragging}
          setSide={setSide}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
        />
      </Canvas>

      <div
        style={{
          textAlign: 'center',
          marginTop: '1rem',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: '#333',
          marginTop:'-50px',
          display:'none',
        }}
      >
        {side && `Currently viewing: ${side}`}
      </div>
    </div>
  );
}
