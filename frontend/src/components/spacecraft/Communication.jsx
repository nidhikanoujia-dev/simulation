import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"


export default function Communication({
  onSelect,
  warning = false
}) {

  const warningMaterialRef = useRef()
  const warningLightRef = useRef()


  useFrame(({ clock }) => {

    if (!warning) {

      if (warningMaterialRef.current) {

        warningMaterialRef.current.color.set(
          "#8effbd"
        )

        warningMaterialRef.current.emissive.set(
          "#00ff88"
        )

        warningMaterialRef.current.emissiveIntensity =
          1

      }


      if (warningLightRef.current) {

        warningLightRef.current.intensity =
          0

      }


      return

    }


    const pulse =
      (Math.sin(
        clock.elapsedTime * 6
      ) + 1) / 2


    if (warningMaterialRef.current) {

      warningMaterialRef.current.color.set(
        "#ffe36a"
      )

      warningMaterialRef.current.emissive.set(
        "#ffc400"
      )

      warningMaterialRef.current.emissiveIntensity =
        1 + pulse * 4

    }


    if (warningLightRef.current) {

      warningLightRef.current.intensity =
        0.3 + pulse * 1.8

    }

  })


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


      <mesh
        position={[
          0,
          0.98,
          0
        ]}
      >

        <sphereGeometry
          args={[
            0.075,
            18,
            18
          ]}
        />

        <meshStandardMaterial
          ref={warningMaterialRef}
          color="#8effbd"
          emissive="#00ff88"
          emissiveIntensity={1}
        />

      </mesh>


      <pointLight
        ref={warningLightRef}
        position={[
          0,
          1.02,
          0
        ]}
        color="#ffd84a"
        intensity={0}
        distance={2}
        decay={2}
      />

    </group>

  )

}