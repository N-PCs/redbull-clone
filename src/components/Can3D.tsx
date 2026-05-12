import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, Suspense, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";
import canTexture from "@/assets/can-original.png";

type CanMeshHandle = { group: THREE.Group | null };

const CanMesh = forwardRef<CanMeshHandle, { autoRotate?: boolean }>(
  ({ autoRotate = true }, ref) => {
    const groupRef = useRef<THREE.Group>(null);
    const texture = useLoader(THREE.TextureLoader, canTexture);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = 1;

    useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

    useFrame((_, delta) => {
      if (autoRotate && groupRef.current) {
        groupRef.current.rotation.y += delta * 0.4;
      }
    });

    return (
      <group ref={groupRef}>
        {/* body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.55, 0.55, 1.9, 64, 1, true]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.25}
            metalness={0.85}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* top cap */}
        <mesh position={[0, 0.96, 0]}>
          <cylinderGeometry args={[0.5, 0.55, 0.08, 64]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={1} />
        </mesh>
        {/* top rim */}
        <mesh position={[0, 1.005, 0]}>
          <torusGeometry args={[0.5, 0.025, 16, 64]} />
          <meshStandardMaterial color="#9a9a9a" metalness={1} roughness={0.2} />
        </mesh>
        {/* bottom */}
        <mesh position={[0, -0.96, 0]}>
          <cylinderGeometry args={[0.55, 0.5, 0.08, 64]} />
          <meshStandardMaterial color="#a8a8a8" roughness={0.4} metalness={1} />
        </mesh>
      </group>
    );
  }
);
CanMesh.displayName = "CanMesh";

export function Can3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 8, 5]}
          angle={0.35}
          penumbra={1}
          intensity={2.5}
          color="#ffffff"
          castShadow
        />
        <pointLight position={[-4, -2, -3]} intensity={1.2} color="#ED1B24" />
        <pointLight position={[4, 2, -3]} intensity={1} color="#3b7dff" />
        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.6}>
            <CanMesh />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
