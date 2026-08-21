import * as THREE from "three"
import { useMemo } from "react"


function CapsuleShell() {

  const geometry = useMemo(() => {

    /*
      TRUNCATED-CONE CREW CAPSULE

      FLAT SMALL FRONT
             ↓
          ________
         /        \
        /          \
       /            \
      /              \
     |________________|

      The radius increases almost linearly,
      giving us the triangular/frustum shape.
    */

    const points = [

      // SMALL FLAT FRONT
      new THREE.Vector2(0.62, -1.55),

      // STRAIGHT TAPER
      new THREE.Vector2(0.76, -1.35),
      new THREE.Vector2(0.94, -1.10),
      new THREE.Vector2(1.12, -0.85),
      new THREE.Vector2(1.30, -0.60),
      new THREE.Vector2(1.48, -0.35),
      new THREE.Vector2(1.64, -0.10),
      new THREE.Vector2(1.78, 0.15),

      // LARGE REAR EDGE
      new THREE.Vector2(1.82, 0.30),
      new THREE.Vector2(1.82, 0.45)

    ]

    return new THREE.LatheGeometry(
      points,
      64
    )

  }, [])


  return (

    <mesh geometry={geometry}>

      <meshStandardMaterial
        color="#d6d7d4"
        metalness={0.42}
        roughness={0.43}
      />

    </mesh>

  )

}



function Window({
  position,
  rotation = [0, 0, 0],
  scale = 1
}) {

  return (

    <group
      position={position}
      rotation={rotation}
      scale={scale}
    >

      {/* WINDOW FRAME */}

      <mesh>

        <boxGeometry
          args={[
            0.34,
            0.24,
            0.055
          ]}
        />

        <meshStandardMaterial
          color="#202529"
          metalness={0.85}
          roughness={0.18}
        />

      </mesh>


      {/* DARK GLASS */}

      <mesh
        position={[
          0,
          0,
          0.04
        ]}
      >

        <boxGeometry
          args={[
            0.26,
            0.16,
            0.03
          ]}
        />

        <meshPhysicalMaterial
          color="#07192c"
          emissive="#03101b"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.07}
        />

      </mesh>

    </group>

  )

}



export default function CrewModule({
  onSelect
}) {

  return (

    <group
      position={[
        0,
        0,
        -4.05
      ]}
      rotation={[
        Math.PI / 2,
        0,
        0
      ]}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >


      {/* ========================================
          TRUNCATED CONE CREW CAPSULE
      ======================================== */}

      <CapsuleShell />


      {/* ========================================
    CAPSULE → SERVICE MODULE CONNECTION
    Fills the hollow-looking gap
======================================== */}

{/* MAIN CONNECTOR COLLAR */}
<mesh
  position={[
    0,
    0.57,
    0
  ]}
  rotation={[
    Math.PI / 2,
    0,
    0
  ]}
>
  <cylinderGeometry
    args={[
      1.80,
      1.72,
      0.42,
      64
    ]}
  />

  <meshStandardMaterial
    color="#34383a"
    metalness={0.82}
    roughness={0.28}
  />
</mesh>


{/* OUTER METALLIC CONNECTION RING */}
<mesh
  position={[
    0,
    0.42,
    0
  ]}
  rotation={[
    Math.PI / 2,
    0,
    0
  ]}
>
  <torusGeometry
    args={[
      1.79,
      0.095,
      16,
      64
    ]}
  />

  <meshStandardMaterial
    color="#727779"
    metalness={0.90}
    roughness={0.20}
  />
</mesh>


{/* INNER DARK STRUCTURAL RING */}
<mesh
  position={[
    0,
    0.67,
    0
  ]}
  rotation={[
    Math.PI / 2,
    0,
    0
  ]}
>
  <torusGeometry
    args={[
      1.69,
      0.075,
      16,
      64
    ]}
  />

  <meshStandardMaterial
    color="#202427"
    metalness={0.88}
    roughness={0.24}
  />
</mesh>


      {/* ========================================
          FLAT FRONT FACE
      ======================================== */}

      <mesh
        position={[
          0,
          -1.56,
          0
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <cylinderGeometry
          args={[
            0.62,
            0.62,
            0.10,
            48
          ]}
        />

        <meshStandardMaterial
          color="#c8cac8"
          metalness={0.48}
          roughness={0.38}
        />

      </mesh>


      {/* ========================================
          FRONT METALLIC RING
      ======================================== */}

      <mesh
        position={[
          0,
          -1.62,
          0
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <torusGeometry
          args={[
            0.48,
            0.075,
            16,
            48
          ]}
        />

        <meshStandardMaterial
          color="#484d50"
          metalness={0.92}
          roughness={0.17}
        />

      </mesh>


      {/* ========================================
          DOCKING PORT
      ======================================== */}

      <mesh
        position={[
          0,
          -1.68,
          0
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <cylinderGeometry
          args={[
            0.34,
            0.34,
            0.14,
            40
          ]}
        />

        <meshStandardMaterial
          color="#292d30"
          metalness={0.9}
          roughness={0.20}
        />

      </mesh>


      {/* DOCKING PORT INNER HOLE */}

      <mesh
        position={[
          0,
          -1.76,
          0
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <cylinderGeometry
          args={[
            0.21,
            0.21,
            0.08,
            40
          ]}
        />

        <meshStandardMaterial
          color="#080a0c"
          metalness={0.6}
          roughness={0.25}
        />

      </mesh>


      {/* ========================================
          WINDOWS
      ======================================== */}

      <Window
        position={[
          -0.70,
          -0.45,
          1.25
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0.20
        ]}
      />


      <Window
        position={[
          0.70,
          -0.45,
          1.25
        ]}
        rotation={[
          Math.PI / 2,
          0,
          -0.20
        ]}
      />


      <Window
        position={[
          -1.15,
          -0.02,
          1.05
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0.30
        ]}
        scale={0.80}
      />


      <Window
        position={[
          1.15,
          -0.02,
          1.05
        ]}
        rotation={[
          Math.PI / 2,
          0,
          -0.30
        ]}
        scale={0.80}
      />


      {/* ========================================
          SMALL HULL DETAILS
      ======================================== */}

      <mesh
        position={[
          -1.36,
          0.08,
          0.55
        ]}
      >

        <boxGeometry
          args={[
            0.12,
            0.28,
            0.25
          ]}
        />

        <meshStandardMaterial
          color="#34393c"
          metalness={0.75}
          roughness={0.28}
        />

      </mesh>


      <mesh
        position={[
          1.36,
          0.08,
          0.55
        ]}
      >

        <boxGeometry
          args={[
            0.12,
            0.28,
            0.25
          ]}
        />

        <meshStandardMaterial
          color="#34393c"
          metalness={0.75}
          roughness={0.28}
        />

      </mesh>


      {/* ========================================
          RCS THRUSTERS
      ======================================== */}

      <mesh
        position={[
          1.48,
          0.15,
          0.62
        ]}
        rotation={[
          0,
          0,
          0.9
        ]}
      >

        <coneGeometry
          args={[
            0.09,
            0.22,
            18
          ]}
        />

        <meshStandardMaterial
          color="#181c1f"
          metalness={0.92}
          roughness={0.17}
        />

      </mesh>


      <mesh
        position={[
          -1.48,
          0.15,
          0.62
        ]}
        rotation={[
          0,
          0,
          -0.9
        ]}
      >

        <coneGeometry
          args={[
            0.09,
            0.22,
            18
          ]}
        />

        <meshStandardMaterial
          color="#181c1f"
          metalness={0.92}
          roughness={0.17}
        />

      </mesh>

    </group>

  )

}