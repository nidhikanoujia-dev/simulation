export default function LifeSupport({
  onSelect,
  active
}) {

  return (

    <group
      position={[
        1.48,
        -0.08,
        -0.10
      ]}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >

      {/* ======================================
          ORANGE LIFE SUPPORT UNIT
          SAME COLOR DURING NORMAL + FAILURE
      ====================================== */}

      <mesh>

        <boxGeometry
          args={[
            0.52,
            1.10,
            0.90
          ]}
        />

        <meshStandardMaterial
          color="#a84f25"
          metalness={0.42}
          roughness={0.40}
        />

      </mesh>


      {/* FRONT COVER */}

      <mesh
        position={[
          0.275,
          0,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.04,
            0.82,
            0.67
          ]}
        />

        <meshStandardMaterial
          color="#c76530"
          metalness={0.32}
          roughness={0.44}
        />

      </mesh>


      {/* INNER PANEL */}

      <mesh
        position={[
          0.30,
          -0.05,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.025,
            0.55,
            0.47
          ]}
        />

        <meshStandardMaterial
          color="#813a20"
          metalness={0.32}
          roughness={0.45}
        />

      </mesh>


      {/* ======================================
          STATUS INDICATOR

          NORMAL = GREEN
          OXYGEN LEAK = RED
      ====================================== */}

      <mesh
        position={[
          0.325,
          0.32,
          0
        ]}
      >

        <sphereGeometry
          args={[
            0.085,
            20,
            20
          ]}
        />

        <meshStandardMaterial
          color={
            active
              ? "#ff2828"
              : "#baffc8"
          }
          emissive={
            active
              ? "#ff0000"
              : "#39ff72"
          }
          emissiveIntensity={
            active
              ? 3.5
              : 1.6
          }
        />

      </mesh>


      {/* SMALL WARNING LIGHT */}

      {active && (

        <pointLight
          position={[
            0.40,
            0.32,
            0
          ]}
          color="#ff1c1c"
          intensity={1.5}
          distance={1.4}
          decay={2}
        />

      )}


      {/* TOP HANDLE */}

      <mesh
        position={[
          0,
          0.63,
          0
        ]}
      >

        <torusGeometry
          args={[
            0.24,
            0.045,
            10,
            24,
            Math.PI
          ]}
        />

        <meshStandardMaterial
          color="#292c2e"
          metalness={0.78}
          roughness={0.28}
        />

      </mesh>


      {/* BOTTOM HANDLE */}

      <mesh
        position={[
          0,
          -0.63,
          0
        ]}
        rotation={[
          0,
          0,
          Math.PI
        ]}
      >

        <torusGeometry
          args={[
            0.24,
            0.045,
            10,
            24,
            Math.PI
          ]}
        />

        <meshStandardMaterial
          color="#292c2e"
          metalness={0.78}
          roughness={0.28}
        />

      </mesh>

    </group>

  )
}