import { Suspense, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const ship = useMemo(() => useGLTF("./planet/scene.gltf"), []);
  const [time, setTime] = useState(0);

  // Use frame hook for continuous rotation and to-and-fro movement
  useFrame(() => setTime((prevTime) => prevTime + 0.01));

  const bobbing = Math.sin(time) * 1; // To-and-fro movement (adjust the multiplier for desired range)
  const rotationY = time * 0.5; // Continuous rotation on Y-axis (up/down rotation)
  const rotationX = Math.sin(time * 0.5) * 0.2; // Left/Right rotation on X-axis

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <primitive
        object={ship.scene}
        scale={1}
        position={[0, bobbing, 0]} // Apply to-and-fro movement on the Y-axis
        rotation={[rotationX, rotationY, 0]} // Apply rotation on both X and Y axes
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      camera={{ position: [20, 1, 5], fov: 10 }}
      style={{ width: "100%", height: "100vh" }} // Fullscreen Canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3} // Restrict the polar angle for better rotation
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
