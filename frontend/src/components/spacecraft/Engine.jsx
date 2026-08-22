import * as THREE from "three"
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"


function Beam({
  start,
  end,
  radius = 0.035
}) {

  const data = useMemo(() => {

    const startVector =
      new THREE.Vector3(
        ...start
      )

    const endVector =
      new THREE.Vector3(
        ...end
      )

    const midpoint =
      new THREE.Vector3()
        .addVectors(
          startVector,
          endVector
        )
        .multiplyScalar(0.5)


    const direction =
      new THREE.Vector3()
        .subVectors(
          endVector,
          startVector
        )


    const length =
      direction.length()


    const quaternion =
      new THREE.Quaternion()


    quaternion.setFromUnitVectors(
      new THREE.Vector3(
        0,
        1,
        0
      ),
      direction
        .clone()
        .normalize()
    )


    return {
      midpoint,
      quaternion,
      length
    }

  }, [
    start,
    end
  ])


  return (

    <mesh
      position={data.midpoint}
      quaternion={data.quaternion}
    >

      <cylinderGeometry
        args={[
          radius,
          radius,
          data.length,
          10
        ]}
      />

      <meshStandardMaterial
        color="#777d80"
        metalness={0.92}
        roughness={0.20}
      />

    </mesh>

  )
}



function Ignition() {

  const outerFlameRef = useRef()
  const innerFlameRef = useRef()

  const outerMaterialRef = useRef()
  const innerMaterialRef = useRef()

  const nozzleMaterialRef = useRef()
  const lightRef = useRef()


  useFrame(({ clock }) => {

    const time =
      clock.elapsedTime


    const outerFlicker =
      0.96 +
      Math.sin(
        time * 13
      ) * 0.025 +
      Math.sin(
        time * 21
      ) * 0.015


    const innerFlicker =
      0.97 +
      Math.sin(
        time * 17
      ) * 0.025


    const glow =
      (
        Math.sin(
          time * 11
        ) + 1
      ) / 2


    if (outerFlameRef.current) {

      outerFlameRef.current.scale.z =
        outerFlicker

    }


    if (innerFlameRef.current) {

      innerFlameRef.current.scale.z =
        innerFlicker

    }


    if (outerMaterialRef.current) {

      outerMaterialRef.current.opacity =
        0.40 +
        glow * 0.12

    }


    if (innerMaterialRef.current) {

      innerMaterialRef.current.opacity =
        0.78 +
        glow * 0.12

    }


    if (nozzleMaterialRef.current) {

      nozzleMaterialRef.current.emissiveIntensity =
        2.4 +
        glow * 0.8

    }


    if (lightRef.current) {

      lightRef.current.intensity =
        1.2 +
        glow * 0.5

    }

  })


  return (

    <group>

      {/* HOT NOZZLE THROAT */}

      <mesh
        position={[
          0,
          0,
          2.26
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <circleGeometry
          args={[
            0.27,
            40
          ]}
        />

        <meshStandardMaterial
          ref={nozzleMaterialRef}
          color="#ff9b24"
          emissive="#ff4d00"
          emissiveIntensity={2.8}
          side={THREE.DoubleSide}
        />

      </mesh>


      {/* OUTER ORANGE FLAME */}

      <mesh
        ref={outerFlameRef}
        position={[
          0,
          0,
          2.57
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <coneGeometry
          args={[
            0.29,
            0.70,
            32,
            1,
            false
          ]}
        />

        <meshBasicMaterial
          ref={outerMaterialRef}
          color="#ff5a00"
          transparent
          opacity={0.46}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
        />

      </mesh>


      {/* INNER YELLOW FLAME */}

      <mesh
        ref={innerFlameRef}
        position={[
          0,
          0,
          2.48
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <coneGeometry
          args={[
            0.16,
            0.47,
            32,
            1,
            false
          ]}
        />

        <meshBasicMaterial
          ref={innerMaterialRef}
          color="#ffc84a"
          transparent
          opacity={0.86}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
        />

      </mesh>


      {/* SMALL BRIGHT CORE */}

      <mesh
        position={[
          0,
          0,
          2.37
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <coneGeometry
          args={[
            0.075,
            0.25,
            24,
            1,
            false
          ]}
        />

        <meshBasicMaterial
          color="#fff1ad"
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
        />

      </mesh>


      {/* SUBTLE ENGINE LIGHT */}

      <pointLight
        ref={lightRef}
        position={[
          0,
          0,
          2.42
        ]}
        color="#ff7015"
        intensity={1.4}
        distance={3.5}
        decay={2}
      />

    </group>

  )
}



export default function Engine({
  onSelect
}) {

  const outerRadius =
    1.08

  const innerRadius =
    0.70


  const frontZ =
    0.28

  const rearZ =
    1.35


  const struts = useMemo(() => {

    const result = []

    const count = 8


    for (
      let index = 0;
      index < count;
      index++
    ) {

      const angle =
        (
          index /
          count
        ) *
        Math.PI *
        2


      const nextAngle =
        angle +
        Math.PI / 8


      result.push({

        start: [
          Math.cos(angle) *
            outerRadius,

          Math.sin(angle) *
            outerRadius,

          frontZ
        ],


        end: [
          Math.cos(nextAngle) *
            innerRadius,

          Math.sin(nextAngle) *
            innerRadius,

          rearZ
        ]

      })

    }


    return result

  }, [])


  return (

    <group
      position={[
        0,
        0,
        2.60
      ]}
      onClick={(event) => {

        event.stopPropagation()

        if (onSelect) {
          onSelect()
        }

      }}
    >

      {/* ENGINE ADAPTER BODY */}

      <mesh
        position={[
          0,
          0,
          -0.25
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <cylinderGeometry
          args={[
            1.38,
            1.18,
            0.65,
            64
          ]}
        />

        <meshStandardMaterial
          color="#2b1710"
          metalness={0.80}
          roughness={0.28}
        />

      </mesh>


      {/* FRONT STRUCTURAL RING */}

      <mesh
        position={[
          0,
          0,
          frontZ
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <torusGeometry
          args={[
            outerRadius,
            0.085,
            14,
            64
          ]}
        />

        <meshStandardMaterial
          color="#777d80"
          metalness={0.94}
          roughness={0.18}
        />

      </mesh>


      {/* REAR STRUCTURAL RING */}

      <mesh
        position={[
          0,
          0,
          rearZ
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <torusGeometry
          args={[
            innerRadius,
            0.075,
            14,
            64
          ]}
        />

        <meshStandardMaterial
          color="#777d80"
          metalness={0.94}
          roughness={0.18}
        />

      </mesh>


      {/* TAPERED SUPPORT TRUSS */}

      {struts.map(
        (
          strut,
          index
        ) => (

          <Beam
            key={index}
            start={
              strut.start
            }
            end={
              strut.end
            }
            radius={0.035}
          />

        )
      )}


      {/* CENTRAL ENGINE SUPPORT */}

      <mesh
        position={[
          0,
          0,
          1.42
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
            0.72,
            0.55,
            48
          ]}
        />

        <meshStandardMaterial
          color="#56311c"
          metalness={0.82}
          roughness={0.26}
        />

      </mesh>


      {/* ENGINE BELL */}

      <mesh
        position={[
          0,
          0,
          1.84
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >

        <coneGeometry
          args={[
            0.72,
            0.92,
            48,
            1,
            true
          ]}
        />

        <meshStandardMaterial
          color="#1b0e09"
          metalness={0.90}
          roughness={0.22}
          side={THREE.DoubleSide}
        />

      </mesh>


      {/* ENGINE BELL RIBS */}

      {[
        1.52,
        1.68,
        1.84,
        2.00,
        2.16
      ].map(
        (
          z,
          index
        ) => (

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
                0.50 +
                  index * 0.045,

                0.035,
                12,
                48
              ]}
            />

            <meshStandardMaterial
              color="#111315"
              metalness={0.94}
              roughness={0.18}
            />

          </mesh>

        )
      )}


      {/* SMALL ORBITAL FLAME */}

      <Ignition />

    </group>

  )
}