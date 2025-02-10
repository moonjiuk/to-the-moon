"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Object3D } from "three";

const Moon = () => {
  const { scene } = useGLTF("assets/models/moon.glb");
  const moonRef = useRef<Object3D | null>(null);

  useFrame((state, delta) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.1; 
    }
  });

  return <primitive ref={moonRef} object={scene} scale={0.002} position={[0, 0, 0]} />;
};

export default function Moon3D() {
    return (
        <section id="moon-3d">
            <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <Suspense fallback={null}>
                        <Stars />
                        <Moon />
                        <ambientLight intensity={7} />
                        <pointLight position={[10, 10, 10]} />
                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}
