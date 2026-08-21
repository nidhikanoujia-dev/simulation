export default function ServiceModule() {
  return (
    <group
      position={[
        0,
        0,
        -0.25
      ]}
    >
      {/* LONG SILVER SERVICE BODY */}
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
            64
          ]}
        />

        <meshStandardMaterial
          color="#9ea3a4"
          metalness={0.62}
          roughness={0.41}
        />
      </mesh>


      {/* FRONT COUPLING */}
      <mesh
        position={[0, 0, -2.40]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            1.38,
            0.09,
            14,
            64
          ]}
        />

        <meshStandardMaterial
          color="#34393c"
          metalness={0.88}
          roughness={0.23}
        />
      </mesh>


      {/* REAR COUPLING */}
      <mesh
        position={[0, 0, 2.40]}
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
            14,
            64
          ]}
        />

        <meshStandardMaterial
          color="#34393c"
          metalness={0.88}
          roughness={0.23}
        />
      </mesh>


      {/* BODY RINGS */}
      {[
        -1.55,
        -0.75,
        0,
        0.75,
        1.55
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
              0.035,
              10,
              64
            ]}
          />

          <meshStandardMaterial
            color="#676d70"
            metalness={0.72}
            roughness={0.34}
          />
        </mesh>
      ))}


      {/* TOP AVIONICS BOX */}
      <mesh
        position={[
          -0.55,
          1.28,
          -0.55
        ]}
      >
        <boxGeometry
          args={[
            0.38,
            0.18,
            0.42
          ]}
        />

        <meshStandardMaterial
          color="#4b5053"
          metalness={0.72}
          roughness={0.35}
        />
      </mesh>


      {/* TOP AVIONICS BOX 2 */}
      <mesh
        position={[
          0.58,
          1.28,
          0.45
        ]}
      >
        <boxGeometry
          args={[
            0.42,
            0.18,
            0.46
          ]}
        />

        <meshStandardMaterial
          color="#44494c"
          metalness={0.72}
          roughness={0.35}
        />
      </mesh>


      {/* SIDE EQUIPMENT */}
      <mesh
        position={[
          -1.38,
          -0.25,
          -0.55
        ]}
      >
        <boxGeometry
          args={[
            0.19,
            0.45,
            0.58
          ]}
        />

        <meshStandardMaterial
          color="#565c5f"
          metalness={0.72}
          roughness={0.36}
        />
      </mesh>


      {/* SIDE EQUIPMENT RIGHT */}
      <mesh
        position={[
          1.38,
          0.18,
          0.65
        ]}
      >
        <boxGeometry
          args={[
            0.19,
            0.46,
            0.56
          ]}
        />

        <meshStandardMaterial
          color="#565c5f"
          metalness={0.72}
          roughness={0.36}
        />
      </mesh>
    </group>
  )
}