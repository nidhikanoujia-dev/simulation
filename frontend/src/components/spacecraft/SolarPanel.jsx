import { useRef } from "react"
import { useFrame } from "@react-three/fiber"


function SolarPanel({
  position,
  rotation = [0, 0, 0],
  onSelect,
  powerFailure = false
}) {

  const panelMaterialRef = useRef()
  const failureMaterialRef = useRef()
  const failureLightRef = useRef()


  useFrame(({ clock }) => {

    if (!panelMaterialRef.current) {
      return
    }


    if (!powerFailure) {

      panelMaterialRef.current.color.set(
        "#101a3d"
      )

      panelMaterialRef.current.emissive.set(
        "#000000"
      )

      panelMaterialRef.current.emissiveIntensity =
        0


      if (failureLightRef.current) {
        failureLightRef.current.intensity = 0
      }


      return

    }


    const pulse =
      (Math.sin(
        clock.elapsedTime * 6
      ) + 1) / 2


    panelMaterialRef.current.color.set(
      "#351010"
    )

    panelMaterialRef.current.emissive.set(
      "#8a0000"
    )

    panelMaterialRef.current.emissiveIntensity =
      0.25 + pulse * 1.3


    if (failureMaterialRef.current) {

      failureMaterialRef.current.emissiveIntensity =
        1 + pulse * 4.5

    }


    if (failureLightRef.current) {

      failureLightRef.current.intensity =
        0.2 + pulse * 2.5

    }

  })


  const gridColor =
    powerFailure
      ? "#ff4a4a"
      : "#91a9d0"


  return (

    <group
      position={position}
      rotation={rotation}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >

      <mesh
        position={[
          0.60,
          0,
          0
        ]}
      >

        <boxGeometry
          args={[
            1.20,
            0.10,
            0.10
          ]}
        />

        <meshStandardMaterial
          color={
            powerFailure
              ? "#8d2929"
              : "#73797c"
          }
          metalness={0.86}
          roughness={0.25}
        />

      </mesh>


      <mesh
        position={[
          1.15,
          0,
          0
        ]}
      >

        <sphereGeometry
          args={[
            0.15,
            18,
            18
          ]}
        />

        <meshStandardMaterial
          color={
            powerFailure
              ? "#a82b2b"
              : "#62686b"
          }
          metalness={0.85}
          roughness={0.24}
        />

      </mesh>


      <mesh
        position={[
          2.35,
          0,
          0
        ]}
      >

        <boxGeometry
          args={[
            2.35,
            0.06,
            1.25
          ]}
        />

        <meshStandardMaterial
          ref={panelMaterialRef}
          color="#101a3d"
          emissive="#000000"
          emissiveIntensity={0}
          metalness={0.42}
          roughness={0.27}
        />

      </mesh>


      {[
        -0.90,
        -0.60,
        -0.30,
        0,
        0.30,
        0.60,
        0.90
      ].map((offset) => (

        <mesh
          key={`v-${offset}`}
          position={[
            2.35 + offset,
            0.046,
            0
          ]}
        >

          <boxGeometry
            args={[
              0.014,
              0.012,
              1.20
            ]}
          />

          <meshStandardMaterial
            color={gridColor}
            emissive={
              powerFailure
                ? "#ff0000"
                : "#000000"
            }
            emissiveIntensity={
              powerFailure
                ? 0.8
                : 0
            }
          />

        </mesh>

      ))}


      {[
        -0.42,
        -0.21,
        0,
        0.21,
        0.42
      ].map((offset) => (

        <mesh
          key={`h-${offset}`}
          position={[
            2.35,
            0.047,
            offset
          ]}
        >

          <boxGeometry
            args={[
              2.30,
              0.012,
              0.014
            ]}
          />

          <meshStandardMaterial
            color={gridColor}
            emissive={
              powerFailure
                ? "#ff0000"
                : "#000000"
            }
            emissiveIntensity={
              powerFailure
                ? 0.8
                : 0
            }
          />

        </mesh>

      ))}


      {powerFailure && (

        <>

          <mesh
            position={[
              2.35,
              0.13,
              0
            ]}
          >

            <sphereGeometry
              args={[
                0.12,
                22,
                22
              ]}
            />

            <meshStandardMaterial
              ref={failureMaterialRef}
              color="#ff3030"
              emissive="#ff0000"
              emissiveIntensity={3}
            />

          </mesh>


          <pointLight
            ref={failureLightRef}
            position={[
              2.35,
              0.18,
              0
            ]}
            color="#ff2222"
            intensity={1}
            distance={2.4}
            decay={2}
          />

        </>

      )}

    </group>

  )

}


export default SolarPanel