export default function SurfaceDetails() {

  const topPanels = [
    [-0.78, 1.395, -1.35],
    [0.12, 1.405, -0.95],
    [0.72, 1.385, -0.40],
    [-0.48, 1.395, 0.45],
    [0.42, 1.395, 1.10]
  ]


  const sidePanels = [
    [-1.405, 0.32, -1.05],
    [-1.405, -0.25, 0.35],
    [1.405, 0.26, -0.65],
    [1.405, -0.18, 0.82]
  ]


  return (
    <group>

      {topPanels.map(
        (position, index) => (
          <mesh
            key={`top-${index}`}
            position={position}
          >
            <boxGeometry
              args={[
                0.23,
                0.045,
                0.27
              ]}
            />

            <meshStandardMaterial
              color={
                index % 2 === 0
                  ? "#33383b"
                  : "#646a6d"
              }
              metalness={0.84}
              roughness={0.29}
            />
          </mesh>
        )
      )}


      {sidePanels.map(
        (position, index) => (
          <mesh
            key={`side-${index}`}
            position={position}
          >
            <boxGeometry
              args={[
                0.045,
                0.22,
                0.30
              ]}
            />

            <meshStandardMaterial
              color="#454b4e"
              metalness={0.84}
              roughness={0.28}
            />
          </mesh>
        )
      )}


      {/* LOWER HULL RAIL */}

      <mesh
        position={[
          0,
          -1.405,
          0.15
        ]}
      >
        <boxGeometry
          args={[
            1.25,
            0.035,
            0.045
          ]}
        />

        <meshStandardMaterial
          color="#2c3134"
          metalness={0.90}
          roughness={0.22}
        />
      </mesh>


      {/* SMALL ACCESS PANEL */}

      <mesh
        position={[
          -1.407,
          0.10,
          1.20
        ]}
      >
        <boxGeometry
          args={[
            0.04,
            0.34,
            0.38
          ]}
        />

        <meshStandardMaterial
          color="#5a6063"
          metalness={0.84}
          roughness={0.28}
        />
      </mesh>

    </group>
  )
}