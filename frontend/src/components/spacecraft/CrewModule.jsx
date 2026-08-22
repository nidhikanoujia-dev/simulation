import * as THREE from "three"
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"


function CapsuleShell({
  warning = false
}) {
  const materialRef = useRef()

  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector2(0.62, -1.55),

      new THREE.Vector2(0.76, -1.35),
      new THREE.Vector2(0.94, -1.10),
      new THREE.Vector2(1.12, -0.85),
      new THREE.Vector2(1.30, -0.60),
      new THREE.Vector2(1.48, -0.35),
      new THREE.Vector2(1.64, -0.10),
      new THREE.Vector2(1.78, 0.15),

      new THREE.Vector2(1.82, 0.30),
      new THREE.Vector2(1.82, 0.45)
    ]

    return new THREE.LatheGeometry(
      points,
      72
    )
  }, [])


  useFrame(({ clock }) => {
    if (!materialRef.current) {
      return
    }

    if (warning) {
      const pulse =
        (Math.sin(
          clock.elapsedTime * 4.8
        ) + 1) / 2

      materialRef.current.color.set(
        "#ded9b7"
      )

      materialRef.current.emissive.set(
        "#b89500"
      )

      materialRef.current.emissiveIntensity =
        0.06 + pulse * 0.25
    }

    else {
      materialRef.current.color.set(
        "#d2d4d3"
      )

      materialRef.current.emissive.set(
        "#000000"
      )

      materialRef.current.emissiveIntensity =
        0
    }
  })


  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        ref={materialRef}
        color="#d2d4d3"
        metalness={0.60}
        roughness={0.34}
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

      <mesh>
        <boxGeometry
          args={[
            0.36,
            0.24,
            0.07
          ]}
        />

        <meshStandardMaterial
          color="#15191c"
          metalness={0.92}
          roughness={0.16}
        />
      </mesh>


      <mesh
        position={[
          0,
          0,
          0.045
        ]}
      >
        <boxGeometry
          args={[
            0.27,
            0.16,
            0.025
          ]}
        />

        <meshPhysicalMaterial
          color="#061420"
          emissive="#020b12"
          emissiveIntensity={0.3}
          metalness={0.80}
          roughness={0.05}
        />
      </mesh>

    </group>
  )
}



function WarningIndicator({
  warning
}) {
  const materialRef = useRef()
  const lightRef = useRef()


  useFrame(({ clock }) => {
    if (!warning) {
      return
    }

    const pulse =
      (Math.sin(
        clock.elapsedTime * 6
      ) + 1) / 2

    if (materialRef.current) {
      materialRef.current.emissiveIntensity =
        1 + pulse * 4
    }

    if (lightRef.current) {
      lightRef.current.intensity =
        0.3 + pulse * 1.5
    }
  })


  if (!warning) {
    return null
  }


  return (
    <group
      position={[
        1.38,
        -0.10,
        0.90
      ]}
    >

      <mesh>
        <sphereGeometry
          args={[
            0.13,
            20,
            20
          ]}
        />

        <meshStandardMaterial
          ref={materialRef}
          color="#ffe16a"
          emissive="#ffc400"
          emissiveIntensity={3}
        />
      </mesh>


      <pointLight
        ref={lightRef}
        color="#ffd94c"
        intensity={1}
        distance={2}
        decay={2}
      />

    </group>
  )
}



export default function CrewModule({
  onSelect,
  warning = false
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

      <CapsuleShell
        warning={warning}
      />


      {/* LONG SOLID SERVICE-TO-CREW ADAPTER */}

      <mesh
        position={[
          0,
          0.96,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.44,
            1.82,
            1.10,
            72
          ]}
        />

        <meshStandardMaterial
          color="#858b8d"
          metalness={0.88}
          roughness={0.24}
        />
      </mesh>


      {/* LARGE SOLID FRONT COLLAR */}

      <mesh
        position={[
          0,
          0.45,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.88,
            1.88,
            0.20,
            72
          ]}
        />

        <meshStandardMaterial
          color="#b9bcbd"
          metalness={0.94}
          roughness={0.17}
        />
      </mesh>


      {/* DARK SEAL */}

      <mesh
        position={[
          0,
          0.52,
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
            1.78,
            0.065,
            16,
            72
          ]}
        />

        <meshStandardMaterial
          color="#252a2d"
          metalness={0.92}
          roughness={0.19}
        />
      </mesh>


      {/* REAR METALLIC BAND */}

      <mesh
        position={[
          0,
          1.40,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            1.47,
            1.47,
            0.16,
            72
          ]}
        />

        <meshStandardMaterial
          color="#595f62"
          metalness={0.91}
          roughness={0.22}
        />
      </mesh>


      {/* FLAT FRONT FACE */}

      <mesh
        position={[
          0,
          -1.56,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.62,
            0.62,
            0.11,
            48
          ]}
        />

        <meshStandardMaterial
          color="#d0d1ce"
          metalness={0.64}
          roughness={0.30}
        />
      </mesh>


      {/* OUTER FRONT RING */}

      <mesh
        position={[
          0,
          -1.63,
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
            0.08,
            16,
            48
          ]}
        />

        <meshStandardMaterial
          color="#363b3e"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>


      {/* BLACK DOCKING PORT */}

      <mesh
        position={[
          0,
          -1.70,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.32,
            0.32,
            0.14,
            40
          ]}
        />

        <meshStandardMaterial
          color="#202426"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>


      {/* SILVER INNER DOCKING COLLAR */}

      <mesh
        position={[
          0,
          -1.77,
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
            0.265,
            0.065,
            18,
            48
          ]}
        />

        <meshStandardMaterial
          color="#e3e5e3"
          metalness={0.82}
          roughness={0.23}
        />
      </mesh>


      {/* SECOND SILVER DETAIL RING */}

      <mesh
        position={[
          0,
          -1.79,
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
            0.205,
            0.025,
            14,
            40
          ]}
        />

        <meshStandardMaterial
          color="#aeb3b5"
          metalness={0.90}
          roughness={0.18}
        />
      </mesh>


      {/* INNER BLACK DOCKING CENTER */}

      <mesh
        position={[
          0,
          -1.81,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.165,
            0.165,
            0.08,
            40
          ]}
        />

        <meshStandardMaterial
          color="#07090b"
          metalness={0.72}
          roughness={0.22}
        />
      </mesh>


      {/* SMALL INNER SILVER HUB */}

      <mesh
        position={[
          0,
          -1.86,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.07,
            0.07,
            0.055,
            32
          ]}
        />

        <meshStandardMaterial
          color="#d9dcda"
          metalness={0.90}
          roughness={0.18}
        />
      </mesh>


      {/* WINDOWS */}

      <Window
        position={[
          -0.69,
          -0.48,
          1.26
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0.20
        ]}
      />


      <Window
        position={[
          0.69,
          -0.48,
          1.26
        ]}
        rotation={[
          Math.PI / 2,
          0,
          -0.20
        ]}
      />


      <Window
        position={[
          -1.13,
          -0.01,
          1.04
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0.31
        ]}
        scale={0.78}
      />


      <Window
        position={[
          1.13,
          -0.01,
          1.04
        ]}
        rotation={[
          Math.PI / 2,
          0,
          -0.31
        ]}
        scale={0.78}
      />


      <WarningIndicator
        warning={warning}
      />

    </group>
  )
}