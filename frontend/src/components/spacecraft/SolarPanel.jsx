function SolarPanel({
  position,
  side,
  onSelect,
  powerFailure = false
}) {
  const direction = side === "left" ? -1 : 1

  return (
    <group
      position={position}
      onClick={(event) => {
        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }
      }}
    >
      <mesh
        position={[
          direction * 0.6,
          0,
          0
        ]}
      >
        <boxGeometry
          args={[
            1.2,
            0.11,
            0.11
          ]}
        />

        <meshStandardMaterial
          color={
            powerFailure
              ? "#7a2020"
              : "#747777"
          }
          emissive={
            powerFailure
              ? "#ff0000"
              : "#000000"
          }
          emissiveIntensity={
            powerFailure
              ? 0.7
              : 0
          }
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      <mesh
        position={[
          direction * 1.8,
          0,
          0
        ]}
      >
        <boxGeometry
          args={[
            2.4,
            0.07,
            1.05
          ]}
        />

        <meshStandardMaterial
          color={
            powerFailure
              ? "#260707"
              : "#071d3e"
          }
          emissive={
            powerFailure
              ? "#500000"
              : "#000000"
          }
          emissiveIntensity={
            powerFailure
              ? 0.8
              : 0
          }
          metalness={0.55}
          roughness={0.28}
        />
      </mesh>

      {[
        -0.8,
        -0.4,
        0,
        0.4,
        0.8
      ].map((offset) => (
        <mesh
          key={offset}
          position={[
            direction * 1.8 + offset,
            0.045,
            0
          ]}
        >
          <boxGeometry
            args={[
              0.018,
              0.012,
              1
            ]}
          />

          <meshStandardMaterial
            color={
              powerFailure
                ? "#ff4040"
                : "#748da7"
            }
            emissive={
              powerFailure
                ? "#ff0000"
                : "#000000"
            }
            emissiveIntensity={
              powerFailure
                ? 1
                : 0
            }
          />
        </mesh>
      ))}

      {[
        -0.32,
        0,
        0.32
      ].map((offset) => (
        <mesh
          key={offset}
          position={[
            direction * 1.8,
            0.045,
            offset
          ]}
        >
          <boxGeometry
            args={[
              2.35,
              0.012,
              0.015
            ]}
          />

          <meshStandardMaterial
            color={
              powerFailure
                ? "#ff4040"
                : "#748da7"
            }
            emissive={
              powerFailure
                ? "#ff0000"
                : "#000000"
            }
            emissiveIntensity={
              powerFailure
                ? 1
                : 0
            }
          />
        </mesh>
      ))}

      {powerFailure && (
        <mesh
          position={[
            direction * 1.8,
            0.11,
            0
          ]}
        >
          <sphereGeometry
            args={[
              0.10,
              20,
              20
            ]}
          />

          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={3}
          />
        </mesh>
      )}
    </group>
  )
}

export default SolarPanel