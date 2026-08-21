import * as THREE from "three"


function EngineGlow() {
  return (
    <group position={[0, 0, 1.30]}>

      {/* INNER ENGINE GLOW */}
      <mesh>
        <sphereGeometry args={[0.24, 24, 24]} />

        <meshStandardMaterial
          color="#ffb52e"
          emissive="#ff7800"
          emissiveIntensity={4}
          roughness={0.25}
        />
      </mesh>


      {/* SOFT OUTER GLOW */}
      <pointLight
        color="#ff9d24"
        intensity={2.2}
        distance={4}
        decay={2}
      />

    </group>
  )
}


function SmallNozzle({
  position,
  scale = 1
}) {
  return (
    <group
      position={position}
      scale={scale}
    >
      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <coneGeometry
          args={[
            0.27,
            0.58,
            28,
            1,
            true
          ]}
        />

        <meshStandardMaterial
          color="#24120b"
          metalness={0.82}
          roughness={0.24}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}


export default function Engine({
  onSelect
}) {
  return (
    <group
      position={[
        0,
        0,
        2.65
      ]}
      onClick={(event) => {
        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }
      }}
    >

      {/* ======================================
          DARK BROWN REAR PROPULSION MODULE
      ====================================== */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.40,
            1.05,
            1.55,
            64
          ]}
        />

        <meshStandardMaterial
          color="#32170d"
          metalness={0.70}
          roughness={0.31}
        />
      </mesh>


      {/* ======================================
          COPPER TRANSITION RING
      ====================================== */}

      <mesh
        position={[
          0,
          0,
          -0.73
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            1.37,
            0.09,
            16,
            64
          ]}
        />

        <meshStandardMaterial
          color="#8a4a20"
          metalness={0.82}
          roughness={0.24}
        />
      </mesh>


      {/* ======================================
          GOLD REAR RING
      ====================================== */}

      <mesh
        position={[
          0,
          0,
          0.77
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            1.03,
            0.11,
            16,
            64
          ]}
        />

        <meshStandardMaterial
          color="#9a6425"
          metalness={0.88}
          roughness={0.20}
        />
      </mesh>


      {/* ======================================
          DARK ENGINE PLATE
      ====================================== */}

      <mesh
        position={[
          0,
          0,
          0.80
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.98,
            0.98,
            0.14,
            48
          ]}
        />

        <meshStandardMaterial
          color="#17100c"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>


      {/* ======================================
          ENGINE NOZZLES
      ====================================== */}

      <SmallNozzle
        position={[
          0,
          0,
          1.08
        ]}
        scale={1.1}
      />


      <SmallNozzle
        position={[
          -0.40,
          0.40,
          1.02
        ]}
        scale={0.52}
      />


      <SmallNozzle
        position={[
          0.40,
          0.40,
          1.02
        ]}
        scale={0.52}
      />


      <SmallNozzle
        position={[
          -0.40,
          -0.40,
          1.02
        ]}
        scale={0.52}
      />


      <SmallNozzle
        position={[
          0.40,
          -0.40,
          1.02
        ]}
        scale={0.52}
      />


      {/* ======================================
          ORANGE-YELLOW IGNITION
      ====================================== */}

      <EngineGlow />


      {/* ======================================
          OUTER PROTECTION RING
      ====================================== */}

      <mesh
        position={[
          0,
          0,
          1.20
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            0.78,
            0.055,
            12,
            48
          ]}
        />

        <meshStandardMaterial
          color="#8c5a22"
          emissive="#351500"
          emissiveIntensity={0.3}
          metalness={0.82}
          roughness={0.22}
        />
      </mesh>

    </group>
  )
}