function SolarPanel({
  position,
  rotation = [0, 0, 0],
  onSelect,
  powerFailure = false
}) {

  const panelColor =
    powerFailure
      ? "#351010"
      : "#101a3d"

  const gridColor =
    powerFailure
      ? "#ff4a4a"
      : "#91a9d0"


  return (
    <group
      position={position}
      rotation={rotation}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >

      {/* SUPPORT ARM */}

      <mesh
        position={[
          0.60,
          0,
          0
        ]}
      >
        <boxGeometry
          args={[
            1.20,
            0.10,
            0.10
          ]}
        />

        <meshStandardMaterial
          color={
            powerFailure
              ? "#8d2929"
              : "#73797c"
          }
          metalness={0.86}
          roughness={0.25}
        />
      </mesh>


      {/* ROTATION JOINT */}

      <mesh
        position={[
          1.15,
          0,
          0
        ]}
      >
        <sphereGeometry
          args={[
            0.15,
            18,
            18
          ]}
        />

        <meshStandardMaterial
          color={
            powerFailure
              ? "#a82b2b"
              : "#62686b"
          }
          metalness={0.85}
          roughness={0.24}
        />
      </mesh>


      {/* ======================================
          SLIGHTLY LARGER SOLAR PANEL
      ====================================== */}

      <mesh
        position={[
          2.35,
          0,
          0
        ]}
      >
        <boxGeometry
          args={[
            2.35,
            0.06,
            1.25
          ]}
        />

        <meshStandardMaterial
          color={panelColor}
          emissive={
            powerFailure
              ? "#450000"
              : "#000000"
          }
          emissiveIntensity={
            powerFailure
              ? 0.7
              : 0
          }
          metalness={0.42}
          roughness={0.27}
        />
      </mesh>


      {/* VERTICAL CELL LINES */}

      {[
        -0.90,
        -0.60,
        -0.30,
        0,
        0.30,
        0.60,
        0.90
      ].map((offset) => (

        <mesh
          key={`v-${offset}`}
          position={[
            2.35 + offset,
            0.046,
            0
          ]}
        >
          <boxGeometry
            args={[
              0.014,
              0.012,
              1.20
            ]}
          />

          <meshStandardMaterial
            color={gridColor}
            emissive={
              powerFailure
                ? "#ff0000"
                : "#000000"
            }
            emissiveIntensity={
              powerFailure
                ? 0.8
                : 0
            }
          />
        </mesh>

      ))}


      {/* HORIZONTAL CELL LINES */}

      {[
        -0.42,
        -0.21,
        0,
        0.21,
        0.42
      ].map((offset) => (

        <mesh
          key={`h-${offset}`}
          position={[
            2.35,
            0.047,
            offset
          ]}
        >
          <boxGeometry
            args={[
              2.30,
              0.012,
              0.014
            ]}
          />

          <meshStandardMaterial
            color={gridColor}
            emissive={
              powerFailure
                ? "#ff0000"
                : "#000000"
            }
            emissiveIntensity={
              powerFailure
                ? 0.8
                : 0
            }
          />
        </mesh>

      ))}


      {/* POWER FAILURE LIGHT */}

      {powerFailure && (

        <mesh
          position={[
            2.35,
            0.12,
            0
          ]}
        >
          <sphereGeometry
            args={[
              0.085,
              18,
              18
            ]}
          />

          <meshStandardMaterial
            color="#ff3030"
            emissive="#ff0000"
            emissiveIntensity={3}
          />
        </mesh>

      )}

    </group>
  )
}


export default SolarPanel