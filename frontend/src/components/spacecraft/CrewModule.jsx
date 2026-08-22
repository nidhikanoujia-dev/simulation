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
      64
    )

  }, [])


  useFrame(({ clock }) => {

    if (!materialRef.current) {
      return
    }


    if (warning) {

      const pulse =
        (Math.sin(
          clock.elapsedTime * 4.5
        ) + 1) / 2


      materialRef.current.color.set(
        "#e7dfad"
      )


      materialRef.current.emissive.set(
        "#e0b900"
      )


      materialRef.current.emissiveIntensity =
        0.08 + pulse * 0.42

    }

    else {

      materialRef.current.color.set(
        "#d6d7d4"
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
        color="#d6d7d4"
        emissive="#000000"
        emissiveIntensity={0}
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



function WarningIndicator({
  warning
}) {

  const lightMaterialRef = useRef()
  const pointLightRef = useRef()


  useFrame(({ clock }) => {

    if (!warning) {
      return
    }


    const pulse =
      (Math.sin(
        clock.elapsedTime * 6
      ) + 1) / 2


    if (lightMaterialRef.current) {

      lightMaterialRef.current.emissiveIntensity =
        1.2 + pulse * 4

    }


    if (pointLightRef.current) {

      pointLightRef.current.intensity =
        0.3 + pulse * 1.8

    }

  })


  if (!warning) {
    return null
  }


  return (

    <group
      position={[
        1.43,
        -0.10,
        0.88
      ]}
    >

      <mesh>

        <sphereGeometry
          args={[
            0.15,
            24,
            24
          ]}
        />

        <meshStandardMaterial
          ref={lightMaterialRef}
          color="#ffe36a"
          emissive="#ffc400"
          emissiveIntensity={3}
        />

      </mesh>


      <pointLight
        ref={pointLightRef}
        color="#ffd84a"
        intensity={1.2}
        distance={2.3}
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


      <WarningIndicator
        warning={warning}
      />

    </group>

  )

}