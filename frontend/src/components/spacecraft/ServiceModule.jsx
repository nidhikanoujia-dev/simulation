export default function ServiceModule() {
  return (
    <group
      position={[
        0,
        0,
        -0.25
      ]}
    >

      {/* MAIN SERVICE MODULE */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.38,
            1.42,
            4.85,
            72
          ]}
        />

        <meshStandardMaterial
          color="#898f91"
          metalness={0.74}
          roughness={0.31}
        />
      </mesh>


      {/* BODY STRUCTURAL BANDS */}

      {[
        -2.08,
        -1.30,
        -0.48,
        0.35,
        1.18,
        2.08
      ].map((z) => (
        <mesh
          key={z}
          position={[
            0,
            0,
            z
          ]}
          rotation={[
            Math.PI / 2,
            0,
            0
          ]}
        >
          <torusGeometry
            args={[
              1.405,
              0.045,
              12,
              72
            ]}
          />

          <meshStandardMaterial
            color="#454b4e"
            metalness={0.92}
            roughness={0.21}
          />
        </mesh>
      ))}


      {/* FRONT HEAVY COLLAR */}

      <mesh
        position={[
          0,
          0,
          -2.37
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.43,
            1.43,
            0.20,
            72
          ]}
        />

        <meshStandardMaterial
          color="#575d60"
          metalness={0.91}
          roughness={0.22}
        />
      </mesh>


      <mesh
        position={[
          0,
          0,
          -2.45
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            1.42,
            0.10,
            16,
            72
          ]}
        />

        <meshStandardMaterial
          color="#b0b4b5"
          metalness={0.94}
          roughness={0.17}
        />
      </mesh>


      {/* REAR ENGINE CONNECTION */}

      <mesh
        position={[
          0,
          0,
          2.38
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.42,
            1.42,
            0.18,
            72
          ]}
        />

        <meshStandardMaterial
          color="#464c4f"
          metalness={0.90}
          roughness={0.23}
        />
      </mesh>


      {/* SMALL TOP HARDWARE */}

      <mesh
        position={[
          -0.70,
          1.38,
          -1.12
        ]}
      >
        <boxGeometry
          args={[
            0.34,
            0.09,
            0.35
          ]}
        />

        <meshStandardMaterial
          color="#343a3d"
          metalness={0.88}
          roughness={0.24}
        />
      </mesh>


      <mesh
        position={[
          0.38,
          1.39,
          -0.45
        ]}
      >
        <boxGeometry
          args={[
            0.32,
            0.08,
            0.32
          ]}
        />

        <meshStandardMaterial
          color="#555b5e"
          metalness={0.86}
          roughness={0.25}
        />
      </mesh>


      <mesh
        position={[
          0.82,
          1.35,
          0.65
        ]}
      >
        <boxGeometry
          args={[
            0.28,
            0.08,
            0.30
          ]}
        />

        <meshStandardMaterial
          color="#373d40"
          metalness={0.88}
          roughness={0.23}
        />
      </mesh>

    </group>
  )
}