import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface DigitalCoreProps {
  reducedMotion?: boolean;
}

export const DigitalCore: React.FC<DigitalCoreProps> = ({ reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const outerWireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const beacon1Ref = useRef<THREE.Mesh>(null);
  const beacon2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Pointer parallax reaction
    if (!reducedMotion) {
      const targetRotationY = state.pointer.x * 0.4;
      const targetRotationX = -state.pointer.y * 0.3;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    }

    // Continuous restrained rotation of components
    if (!reducedMotion) {
      if (innerCoreRef.current) {
        innerCoreRef.current.rotation.y += delta * 0.2;
        innerCoreRef.current.rotation.x += delta * 0.1;
      }

      if (outerWireframeRef.current) {
        outerWireframeRef.current.rotation.y -= delta * 0.25;
        outerWireframeRef.current.rotation.z += delta * 0.15;
      }

      if (ring1Ref.current) {
        ring1Ref.current.rotation.z += delta * 0.3;
        ring1Ref.current.rotation.x += delta * 0.05;
      }

      if (ring2Ref.current) {
        ring2Ref.current.rotation.y += delta * 0.25;
        ring2Ref.current.rotation.z -= delta * 0.15;
      }

      if (ring3Ref.current) {
        ring3Ref.current.rotation.x -= delta * 0.2;
        ring3Ref.current.rotation.y += delta * 0.1;
      }

      // Orbiting beacons
      const time = state.clock.getElapsedTime();
      if (beacon1Ref.current) {
        beacon1Ref.current.position.x = Math.cos(time * 1.2) * 2.2;
        beacon1Ref.current.position.z = Math.sin(time * 1.2) * 2.2;
        beacon1Ref.current.position.y = Math.sin(time * 2.4) * 0.4;
      }

      if (beacon2Ref.current) {
        beacon2Ref.current.position.x = Math.sin(time * 0.9) * 2.7;
        beacon2Ref.current.position.y = Math.cos(time * 0.9) * 2.7;
        beacon2Ref.current.position.z = Math.cos(time * 1.8) * 0.5;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Illuminating Core PointLight */}
      <pointLight color="#54E7FF" intensity={2} distance={8} decay={2} />
      <pointLight color="#4D8DFF" intensity={1.5} distance={12} position={[2, 3, 2]} />

      {/* Inner Solid Engineering Core */}
      <mesh ref={innerCoreRef}>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshStandardMaterial
          color="#101522"
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
          emissive="#1a3365"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Outer Holographic Cyan Lattice */}
      <mesh ref={outerWireframeRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#54E7FF"
          emissive="#54E7FF"
          emissiveIntensity={0.7}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Secondary Octahedral Cage */}
      <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <octahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial
          color="#4D8DFF"
          emissive="#4D8DFF"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Primary Equatorial Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#54E7FF"
          emissive="#54E7FF"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Secondary Polar Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.4, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#4D8DFF"
          emissive="#4D8DFF"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Outer Telemetry Ring */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
        <torusGeometry args={[2.8, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#FF454F"
          emissive="#FF454F"
          emissiveIntensity={0.5}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Orbiting Telemetry Beacons */}
      <mesh ref={beacon1Ref}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color="#54E7FF"
          emissive="#54E7FF"
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh ref={beacon2Ref}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color="#FF454F"
          emissive="#FF454F"
          emissiveIntensity={1.2}
        />
      </mesh>
    </group>
  );
};
