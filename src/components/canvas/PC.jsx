import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Anime = ({ isMobile }) => {
  const groupRef = useRef();
  const model = useMemo(() => useGLTF("./gaming_setup/scene.gltf"), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Define a bounded range for horizontal movement
      const moveRange = 2.5; // Max horizontal movement to the right/left
      const movementSpeed = 1.2; // Speed of movement

      // Set the horizontal movement between -moveRange and +moveRange
      groupRef.current.position.x = Math.sin(t * movementSpeed) * moveRange;

      // Vertical bobbing effect, adjusting the range so the model moves up and down a bit
      const verticalRange = 0.3; // Max vertical movement (upward and downward)
      groupRef.current.position.y = Math.sin(t * 0.6) * verticalRange + 1.5; // Added upward shift
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <spotLight
        position={[15, 30, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />

      {/* Gaming Setup Model */}
      <primitive
        object={model.scene}
        scale={isMobile ? 0.35 : 0.45} // Adjusted scale for mobile and desktop
        position={[1.5, -2.8, -2]} // Shifted upward to make sure it's visible
        rotation={[0, -0.4, -0.1]}
      />
    </group>
  );
};

const PCCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "radial-gradient(circle at center, #141414, #000)",
        cursor: "grab",
      }}
    >
      <Canvas
        frameloop="always"
        dpr={[1, isMobile ? 1.5 : 2]}
        camera={{ position: [8, 3, 7], fov: 30 }} // Wider FOV to capture more of the model
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Anime isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default PCCanvas;
