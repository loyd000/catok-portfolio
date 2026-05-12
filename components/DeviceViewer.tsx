"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  Bounds,
  Environment,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

function DeviceModel() {
  const { scene } = useGLTF("/models/device.glb");
  return (
    <Bounds fit observe margin={1.4}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
}

useGLTF.preload("/models/device.glb");

function FallbackSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-catok-accent rounded-full animate-pulse w-1/2" />
        </div>
        <span className="font-mono text-white/30 text-xs">Loading 3D model…</span>
      </div>
    </div>
  );
}

export default function DeviceViewer() {

  return (
    <div className="relative w-full h-full">
      <Suspense fallback={<FallbackSpinner />}>
        <Canvas
          camera={{ position: [0, 80, 400], fov: 45, near: 0.1, far: 100000 }}
          gl={{ antialias: true, alpha: true }}
          shadows
        >
          <ambientLight intensity={0.08} />
          <directionalLight position={[300, 400, 200]} intensity={1.8} castShadow />
          <directionalLight position={[-200, -100, -150]} intensity={0.05} />
          <pointLight position={[-300, 100, -200]} intensity={2.5} color="#52b788" />
          <pointLight position={[0, -300, 100]} intensity={0.3} color="#1a3d2b" />

          <DeviceModel />

          <ContactShadows
            position={[0, -150, 0]}
            opacity={0.45}
            scale={800}
            blur={3}
            far={400}
            color="#0f1f14"
          />
          <Environment preset="warehouse" background={false} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.2}
            dampingFactor={0.08}
            enableDamping
          />
        </Canvas>
      </Suspense>

      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/30 text-xs pointer-events-none select-none flex items-center gap-1.5">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
        Drag to rotate
      </p>
    </div>
  );
}
