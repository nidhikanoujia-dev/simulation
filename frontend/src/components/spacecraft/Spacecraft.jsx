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
  const oxygenLeak =
    simulation === "oxygen_leak"

  const powerFailure =
    simulation === "power_failure"


  return (
    <group
      rotation={[
        -0.10,
        -0.50,
        -0.03
      ]}
      scale={0.82}
    >
      {/* CREW CAPSULE */}
      <CrewModule
        onSelect={() =>
          onSystemSelect("crew")
        }
      />


      {/* LONG SERVICE MODULE */}
      <ServiceModule />


      {/* EXISTING DETAILS */}
      <SurfaceDetails />


      {/* BIG LIFE SUPPORT BOX */}
      <LifeSupport
        onSelect={() =>
          onSystemSelect(
            "life_support"
          )
        }
        active={oxygenLeak}
      />


      {/* UPPER LEFT SOLAR PANEL */}
      <SolarPanel
        position={[
          -0.90,
          0.85,
          -0.05
        ]}
        rotation={[
          0,
          0,
          2.28
        ]}
        powerFailure={
          powerFailure
        }
        onSelect={() =>
          onSystemSelect(
            "solar_left"
          )
        }
      />


      {/* LOWER LEFT SOLAR PANEL */}
      <SolarPanel
        position={[
          -0.90,
          -0.85,
          -0.05
        ]}
        rotation={[
          0,
          0,
          -2.28
        ]}
        powerFailure={
          powerFailure
        }
        onSelect={() =>
          onSystemSelect(
            "solar_left"
          )
        }
      />


      {/* UPPER RIGHT SOLAR PANEL */}
      <SolarPanel
        position={[
          0.90,
          0.85,
          -0.05
        ]}
        rotation={[
          0,
          0,
          0.86
        ]}
        powerFailure={
          powerFailure
        }
        onSelect={() =>
          onSystemSelect(
            "solar_right"
          )
        }
      />


      {/* LOWER RIGHT SOLAR PANEL */}
      <SolarPanel
        position={[
          0.90,
          -0.85,
          -0.05
        ]}
        rotation={[
          0,
          0,
          -0.86
        ]}
        powerFailure={
          powerFailure
        }
        onSelect={() =>
          onSystemSelect(
            "solar_right"
          )
        }
      />


      {/* ANTENNA */}
      <Communication
        onSelect={() =>
          onSystemSelect(
            "communication"
          )
        }
      />


      {/* REAR PROPULSION */}
      <Engine
        onSelect={() =>
          onSystemSelect(
            "engine"
          )
        }
      />
    </group>
  )
}


export default Spacecraft