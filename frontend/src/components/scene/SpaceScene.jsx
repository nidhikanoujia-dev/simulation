import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Stars
} from "@react-three/drei"

import Spacecraft from "../spacecraft/Spacecraft"


function SpaceScene({
  simulation,
  onSystemSelect
}) {
  return (
    <Canvas
      shadows
      camera={{
        position: [
          7.5,
          4.5,
          10.5
        ],
        fov: 42
      }}
      gl={{
        antialias: true
      }}
    >

      <ambientLight
        intensity={0.3}
      />

      <directionalLight
        position={[
          -7,
          8,
          5
        ]}
        intensity={3.2}
      />

      <directionalLight
        position={[
          6,
          -1,
          5
        ]}
        intensity={1.3}
      />

      <pointLight
        position={[
          -4,
          2,
          3
        ]}
        intensity={1.2}
        color="#8db8ff"
      />

      <pointLight
        position={[
          3,
          -1,
          4
        ]}
        intensity={1.6}
        color="#ffad38"
      />

      <Stars
        radius={100}
        depth={60}
        count={3500}
        factor={3}
        saturation={0}
        fade
        speed={0.25}
      />

      <Spacecraft
        simulation={
          simulation
        }
        onSystemSelect={
          onSystemSelect
        }
      />

      <OrbitControls
        enablePan={false}
        minDistance={7}
        maxDistance={18}
        autoRotate
        autoRotateSpeed={0.25}
      />

    </Canvas>
  )
}


export default SpaceScene