"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralMesh() {
  const outerGroupRef = useRef(null);
  const innerMeshRef = useRef(null);
  const pointsRef = useRef(null);

  // Generate icosahedron geometry for outer neural structure
  const { positions, lineGeometry } = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(2.2, 1);
    const wireframe = new THREE.WireframeGeometry(geom);
    const pos = geom.attributes.position.array;
    return { positions: pos, lineGeometry: wireframe };
  }, []);

  useFrame((state, delta) => {
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (outerGroupRef.current) {
      // Continuous idle spin + subtle mouse parallax tracking
      outerGroupRef.current.rotation.y += delta * 0.15;
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        mouseY * 0.4,
        0.05
      );
      outerGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.z,
        -mouseX * 0.3,
        0.05
      );
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.25;
      innerMeshRef.current.rotation.x -= delta * 0.15;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={outerGroupRef} position={[0, 0, 0]}>
      {/* Outer Neural Wireframe Lattice */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Neural Node Points at Vertices */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color="#c084fc"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner Core Computing Polyhedron */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial
          wireframe
          color="#a855f7"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function Hero3DCanvas() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      aria-hidden="true"
      className="hidden md:block pointer-events-none absolute inset-0 -z-10 w-full h-full overflow-hidden opacity-60 dark:opacity-45"
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <NeuralMesh />
      </Canvas>
    </div>
  );
}
