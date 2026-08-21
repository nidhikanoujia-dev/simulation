import * as THREE from "three";
export default function Engine({
  onSelect
}) {

  return (

    <group
      position={[0, 0, 2.55]}
      onClick={(event) => {

        event.stopPropagation();
        onSelect();

      }}
    >

      {/* GOLD PROPULSION BODY */}

      <mesh
        rotation={[Math.PI / 2, 0, 0]}
      >

        <cylinderGeometry
          args={[
            1.45,
            1.35,
            2.0,
            64
          ]}
        />

        <meshStandardMaterial
          color="#8f610c"
          metalness={0.95}
          roughness={0.22}
        />

      </mesh>


      {/* GOLD HIGHLIGHT LAYER */}

      <mesh
        position={[0, 0.01, -0.15]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <cylinderGeometry
          args={[
            1.455,
            1.355,
            1.65,
            64
          ]}
        />

        <meshStandardMaterial
          color="#b3790f"
          metalness={0.95}
          roughness={0.18}
        />

      </mesh>


      {/* ENGINE REAR RING */}

      <mesh
        position={[0, 0, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <torusGeometry
          args={[1.32, 0.11, 14, 64]}
        />

        <meshStandardMaterial
          color="#222426"
          metalness={0.95}
          roughness={0.2}
        />

      </mesh>


      {/* ENGINE NOZZLE CENTER */}

      <mesh
        position={[0, 0, 1.35]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <coneGeometry
          args={[
            0.62,
            0.85,
            40,
            1,
            true
          ]}
        />

        <meshStandardMaterial
          color="#141516"
          metalness={0.95}
          roughness={0.18}
          side={THREE.DoubleSide}
        />

      </mesh>


      {/* ENGINE INNER GLOW */}

      <mesh
        position={[0, 0, 1.62]}
      >

        <sphereGeometry
          args={[0.23, 24, 24]}
        />

        <meshStandardMaterial
          color="#ff9a22"
          emissive="#ff6500"
          emissiveIntensity={3}
        />

      </mesh>


      {/* SMALL THRUSTER 1 */}

      <mesh
        position={[0.75, 0.5, 1.30]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <coneGeometry
          args={[0.22, 0.45, 24]}
        />

        <meshStandardMaterial
          color="#242526"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* SMALL THRUSTER 2 */}

      <mesh
        position={[-0.75, 0.5, 1.30]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <coneGeometry
          args={[0.22, 0.45, 24]}
        />

        <meshStandardMaterial
          color="#242526"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* SMALL THRUSTER 3 */}

      <mesh
        position={[0.75, -0.5, 1.30]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <coneGeometry
          args={[0.22, 0.45, 24]}
        />

        <meshStandardMaterial
          color="#242526"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* SMALL THRUSTER 4 */}

      <mesh
        position={[-0.75, -0.5, 1.30]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <coneGeometry
          args={[0.22, 0.45, 24]}
        />

        <meshStandardMaterial
          color="#242526"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>

    </group>
  );
}