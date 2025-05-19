import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf'); // Load GLTF model

  return (
    <>
      {/* Lights */}
      <hemisphereLight
        intensity={0.15}
        groundColor={'black'}
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* 3D Model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the scree size
    const mediaQuery = window.matchMedia("(max-width:500px)");

    //set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    //define a callback functon to handle changes to the media query
    const handleMediaQueryChanges = (event) => {
      setIsMobile(event.matches);
    }

    // add the callback function as a listener or changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChanges);

    //remove the listener when the componenet is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChanges);
    }
  }, [])

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
