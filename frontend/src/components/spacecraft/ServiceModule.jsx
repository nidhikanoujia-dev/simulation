export default function ServiceModule() {

  return (

    <group position={[0, 0, 0]}>

      {/* MAIN BODY */}

      <mesh
        rotation={[Math.PI / 2, 0, 0]}
      >

        <cylinderGeometry
          args={[
            1.42,
            1.42,
            3.2,
            64
          ]}
        />

        <meshStandardMaterial
          color="#a6a7a4"
          metalness={0.72}
          roughness={0.38}
        />

      </mesh>


      {/* FRONT CONNECTION RING */}

      <mesh
        position={[0, 0, -1.55]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <torusGeometry
          args={[1.42, 0.10, 16, 64]}
        />

        <meshStandardMaterial
          color="#3d4143"
          metalness={0.9}
          roughness={0.25}
        />

      </mesh>


      {/* REAR CONNECTION RING */}

      <mesh
        position={[0, 0, 1.55]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <torusGeometry
          args={[1.42, 0.10, 16, 64]}
        />

        <meshStandardMaterial
          color="#3d4143"
          metalness={0.9}
          roughness={0.25}
        />

      </mesh>


      {/* HORIZONTAL BODY BAND */}

      <mesh
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >

        <torusGeometry
          args={[1.43, 0.055, 12, 64]}
        />

        <meshStandardMaterial
          color="#666968"
          metalness={0.8}
          roughness={0.3}
        />

      </mesh>


      {/* EQUIPMENT BOX 1 */}

      <mesh
        position={[1.42, 0.25, -0.65]}
      >

        <boxGeometry
          args={[0.28, 0.65, 0.48]}
        />

        <meshStandardMaterial
          color="#55595a"
          metalness={0.75}
          roughness={0.35}
        />

      </mesh>


      {/* EQUIPMENT BOX 2 */}

      <mesh
        position={[-1.38, -0.22, 0.15]}
      >

        <boxGeometry
          args={[0.24, 0.55, 0.55]}
        />

        <meshStandardMaterial
          color="#686c6d"
          metalness={0.75}
          roughness={0.38}
        />

      </mesh>


      {/* EQUIPMENT BOX 3 */}

      <mesh
        position={[0.6, 1.24, 0.55]}
      >

        <boxGeometry
          args={[0.48, 0.26, 0.6]}
        />

        <meshStandardMaterial
          color="#484c4e"
          metalness={0.75}
          roughness={0.35}
        />

      </mesh>

    </group>

  );
}