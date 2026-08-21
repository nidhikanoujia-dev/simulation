import * as THREE from "three";
import { useMemo } from "react";

function CapsuleHull() {

  const geometry = useMemo(() => {

    const points = [

      new THREE.Vector2(0.20, -1.65),
      new THREE.Vector2(0.38, -1.50),
      new THREE.Vector2(0.62, -1.28),
      new THREE.Vector2(0.90, -0.95),
      new THREE.Vector2(1.12, -0.55),
      new THREE.Vector2(1.30, -0.05),
      new THREE.Vector2(1.38, 0.50),
      new THREE.Vector2(1.40, 0.95),
      new THREE.Vector2(1.37, 1.15)

    ];

    return new THREE.LatheGeometry(
      points,
      64
    );

  }, []);

  return (

    <mesh geometry={geometry}>

      <meshStandardMaterial
        color="#c5c7c6"
        metalness={0.72}
        roughness={0.34}
      />

    </mesh>

  );
}


export default function CrewModule({ onSelect }) {

  return (

    <group
      position={[0, 0, -3.2]}
      rotation={[Math.PI / 2, 0, 0]}
      onClick={(event) => {

        event.stopPropagation();
        onSelect();

      }}
    >

      {/* MAIN CAPSULE */}

      <CapsuleHull />


      {/* FRONT DARK NOSE */}

      <mesh
        position={[0, -1.72, 0]}
      >

        <sphereGeometry
          args={[0.28, 32, 20]}
        />

        <meshStandardMaterial
          color="#28303b"
          metalness={0.85}
          roughness={0.25}
        />

      </mesh>


      {/* REAR STRUCTURAL RING */}

      <mesh
        position={[0, 1.08, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <torusGeometry
          args={[1.38, 0.09, 16, 64]}
        />

        <meshStandardMaterial
          color="#4d5052"
          metalness={0.9}
          roughness={0.25}
        />

      </mesh>


      {/* WINDOW 1 */}

      <mesh
        position={[-0.62, -0.25, 1.03]}
        rotation={[Math.PI / 2, 0, 0.15]}
      >

        <boxGeometry
          args={[0.40, 0.30, 0.055]}
        />

        <meshStandardMaterial
          color="#081727"
          emissive="#06162a"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
        />

      </mesh>


      {/* WINDOW 2 */}

      <mesh
        position={[0, -0.38, 1.14]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <boxGeometry
          args={[0.42, 0.30, 0.055]}
        />

        <meshStandardMaterial
          color="#081727"
          emissive="#06162a"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
        />

      </mesh>


      {/* WINDOW 3 */}

      <mesh
        position={[0.62, -0.25, 1.03]}
        rotation={[Math.PI / 2, 0, -0.15]}
      >

        <boxGeometry
          args={[0.40, 0.30, 0.055]}
        />

        <meshStandardMaterial
          color="#081727"
          emissive="#06162a"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
        />

      </mesh>


      {/* HULL EQUIPMENT BLOCKS */}

      <mesh
        position={[1.18, 0.40, 0]}
      >

        <boxGeometry
          args={[0.18, 0.55, 0.45]}
        />

        <meshStandardMaterial
          color="#666a6c"
          metalness={0.75}
          roughness={0.35}
        />

      </mesh>


      <mesh
        position={[-1.12, 0.65, 0.15]}
      >

        <boxGeometry
          args={[0.16, 0.45, 0.35]}
        />

        <meshStandardMaterial
          color="#777b7c"
          metalness={0.7}
          roughness={0.4}
        />

      </mesh>


      {/* TOP EQUIPMENT */}

      <mesh
        position={[0.48, 0.50, 1.20]}
      >

        <boxGeometry
          args={[0.32, 0.34, 0.18]}
        />

        <meshStandardMaterial
          color="#505457"
          metalness={0.8}
          roughness={0.3}
        />

      </mesh>

    </group>

  );
}