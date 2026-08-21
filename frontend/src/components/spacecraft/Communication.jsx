import * as THREE from "three"


export default function Communication({
  onSelect
}) {

  return (

    <group
      position={[
        -0.45,
        1.48,
        -0.15
      ]}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >

      {/* ANTENNA BASE */}
      <mesh>
        <cylinderGeometry
          args={[
            0.16,
            0.20,
            0.16,
            20
          ]}
        />

        <meshStandardMaterial
          color="#42474a"
          metalness={0.9}
          roughness={0.22}
        />
      </mesh>


      {/* MAST */}
      <mesh
        position={[
          0,
          0.43,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.035,
            0.05,
            0.78,
            16
          ]}
        />

        <meshStandardMaterial
          color="#b1b5b5"
          metalness={0.92}
          roughness={0.2}
        />
      </mesh>


      {/* DISH */}
      <mesh
        position={[
          0,
          0.85,
          0
        ]}
        rotation={[
          Math.PI,
          0,
          0
        ]}
      >
        <coneGeometry
          args={[
            0.30,
            0.12,
            32,
            1,
            true
          ]}
        />

        <meshStandardMaterial
          color="#d1d3d2"
          metalness={0.82}
          roughness={0.24}
          side={THREE.DoubleSide}
        />
      </mesh>


      {/* DISH CENTER */}
      <mesh
        position={[
          0,
          0.80,
          0
        ]}
      >
        <sphereGeometry
          args={[
            0.055,
            16,
            16
          ]}
        />

        <meshStandardMaterial
          color="#25292c"
          metalness={0.85}
        />
      </mesh>


      {/* ANTENNA TIP */}
      <mesh
        position={[
          0,
          0.98,
          0
        ]}
      >
        <sphereGeometry
          args={[
            0.035,
            12,
            12
          ]}
        />

        <meshStandardMaterial
          color="#8effbd"
          emissive="#00ff88"
          emissiveIntensity={1}
        />
      </mesh>

    </group>
  )
}