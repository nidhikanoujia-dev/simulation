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

      <CrewModule
        warning={oxygenLeak}
        onSelect={() =>
          onSystemSelect(
            "crew"
          )
        }
      />


      <ServiceModule />


      <SurfaceDetails />


      <LifeSupport
        active={oxygenLeak}
        warning={powerFailure}
        onSelect={() =>
          onSystemSelect(
            "life_support"
          )
        }
      />


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


      <Communication
        warning={powerFailure}
        onSelect={() =>
          onSystemSelect(
            "communication"
          )
        }
      />


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