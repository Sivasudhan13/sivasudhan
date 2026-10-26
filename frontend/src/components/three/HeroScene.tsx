import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { DigitalCore } from './DigitalCore';
import { ParticleField } from './ParticleField';
import { SceneFallback } from './SceneFallback';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('WebGL / 3D Canvas initialization handled:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroScene: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL context support
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsWebGLAvailable(false);
      }
    } catch {
      setIsWebGLAvailable(false);
    }
  }, []);

  if (!isWebGLAvailable) {
    return <SceneFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[500px]">
      <CanvasErrorBoundary fallback={<SceneFallback />}>
        <Suspense fallback={<SceneFallback />}>
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            className="w-full h-full"
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
            <directionalLight position={[-5, -4, -2]} intensity={0.6} color="#4D8DFF" />

            <DigitalCore reducedMotion={reducedMotion} />
            <ParticleField count={100} reducedMotion={reducedMotion} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
};
