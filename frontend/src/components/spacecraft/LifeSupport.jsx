import { useRef } from "react"
import { useFrame } from "@react-three/fiber"


export default function LifeSupport({
  onSelect,
  active = false,
  warning = false
}) {

  const statusMaterialRef = useRef()
  const warningLightRef = useRef()


  useFrame(({ clock }) => {

    if (!statusMaterialRef.current) {
      return
    }


    const pulse =
      (Math.sin(
        clock.elapsedTime * 6
      ) + 1) / 2


    if (active) {

      statusMaterialRef.current.color.set(
        "#ff2828"
      )

      statusMaterialRef.current.emissive.set(
        "#ff0000"
      )

      statusMaterialRef.current.emissiveIntensity =
        0.8 + pulse * 4.5


      if (warningLightRef.current) {

        warningLightRef.current.color.set(
          "#ff1c1c"
        )

        warningLightRef.current.intensity =
          0.2 + pulse * 2.2

      }


      return

    }


    if (warning) {

      statusMaterialRef.current.color.set(
        "#ffe36a"
      )

      statusMaterialRef.current.emissive.set(
        "#ffc400"
      )

      statusMaterialRef.current.emissiveIntensity =
        0.8 + pulse * 3.5


      if (warningLightRef.current) {

        warningLightRef.current.color.set(
          "#ffd84a"
        )

        warningLightRef.current.intensity =
          0.2 + pulse * 1.8

      }


      return

    }


    statusMaterialRef.current.color.set(
      "#baffc8"
    )

    statusMaterialRef.current.emissive.set(
      "#39ff72"
    )

    statusMaterialRef.current.emissiveIntensity =
      1.6


    if (warningLightRef.current) {

      warningLightRef.current.intensity =
        0

    }

  })


  return (

    <group
      position={[
        1.48,
        -0.08,
        -0.10
      ]}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >

      <mesh>

        <boxGeometry
          args={[
            0.52,
            1.10,
            0.90
          ]}
        />

        <meshStandardMaterial
          color="#a84f25"
          metalness={0.42}
          roughness={0.40}
        />

      </mesh>


      <mesh
        position={[
          0.275,
          0,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.04,
            0.82,
            0.67
          ]}
        />

        <meshStandardMaterial
          color="#c76530"
          metalness={0.32}
          roughness={0.44}
        />

      </mesh>


      <mesh
        position={[
          0.30,
          -0.05,
          0
        ]}
      >

        <boxGeometry
          args={[
            0.025,
            0.55,
            0.47
          ]}
        />

        <meshStandardMaterial
          color="#813a20"
          metalness={0.32}
          roughness={0.45}
        />

      </mesh>


      <mesh
        position={[
          0.325,
          0.32,
          0
        ]}
      >

        <sphereGeometry
          args={[
            0.11,
            22,
            22
          ]}
        />

        <meshStandardMaterial
          ref={statusMaterialRef}
          color="#baffc8"
          emissive="#39ff72"
          emissiveIntensity={1.6}
        />

      </mesh>


      <pointLight
        ref={warningLightRef}
        position={[
          0.40,
          0.32,
          0
        ]}
        color="#ff1c1c"
        intensity={0}
        distance={2}
        decay={2}
      />


      <mesh
        position={[
          0,
          0.63,
          0
        ]}
      >

        <torusGeometry
          args={[
            0.24,
            0.045,
            10,
            24,
            Math.PI
          ]}
        />

        <meshStandardMaterial
          color="#292c2e"
          metalness={0.78}
          roughness={0.28}
        />

      </mesh>


      <mesh
        position={[
          0,
          -0.63,
          0
        ]}
        rotation={[
          0,
          0,
          Math.PI
        ]}
      >

        <torusGeometry
          args={[
            0.24,
            0.045,
            10,
            24,
            Math.PI
          ]}
        />

        <meshStandardMaterial
          color="#292c2e"
          metalness={0.78}
          roughness={0.28}
        />

      </mesh>

    </group>

  )

}