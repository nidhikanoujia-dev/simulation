import CrewModule from "./CrewModule"
import ServiceModule from "./ServiceModule"
import LifeSupport from "./LifeSupport"
import SolarPanel from "./SolarPanel"
import Communication from "./Communication"
import Engine from "./Engine"
import SurfaceDetails from "./SurfaceDetails"

function Spacecraft({
  onSystemSelect,
  simulation
}) {
  return (
    <group
      rotation={[
        -0.15,
        -0.50,
        -0.08
      ]}
      scale={0.92}
    >
      <CrewModule
        onSelect={() =>
          onSystemSelect("crew")
        }
      />

      <ServiceModule />

      <SurfaceDetails />

      <LifeSupport
        onSelect={() =>
          onSystemSelect("life_support")
        }
        active={
          simulation === "oxygen_leak"
        }
      />

      <SolarPanel
        position={[
          -1.35,
          -0.15,
          0.35
        ]}
        side="left"
        powerFailure={
          simulation === "power_failure"
        }
        onSelect={() =>
          onSystemSelect("solar_left")
        }
      />

      <SolarPanel
        position={[
          1.35,
          -0.15,
          0.35
        ]}
        side="right"
        powerFailure={
          simulation === "power_failure"
        }
        onSelect={() =>
          onSystemSelect("solar_right")
        }
      />

      <Communication
        onSelect={() =>
          onSystemSelect("communication")
        }
      />

      <Engine
        onSelect={() =>
          onSystemSelect("engine")
        }
      />
    </group>
  )
}

export default Spacecraft