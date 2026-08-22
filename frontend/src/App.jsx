import { useState } from "react"

import EmergencyPanel from "./components/dashboard/EmergencyPanel"
import SpaceScene from "./components/scene/SpaceScene"


const telemetry = {

  crew: {
    name: "CREW MODULE",
    status: "normal",
    problem: "No Issues",
    oxygen: 98,
    pressure: "NORMAL",
    temperature: 22
  },

  solar_left: {
    name: "SOLAR ARRAY - LEFT",
    status: "normal",
    problem: "No Issues",
    oxygen: 0,
    pressure: "N/A",
    temperature: 35
  },

  solar_right: {
    name: "SOLAR ARRAY - RIGHT",
    status: "normal",
    problem: "No Issues",
    oxygen: 0,
    pressure: "N/A",
    temperature: 35
  },

  life_support: {
    name: "LIFE SUPPORT",
    status: "normal",
    problem: "No Issues",
    oxygen: 98,
    pressure: "NORMAL",
    temperature: 21
  },

  power: {
    name: "POWER SYSTEM",
    status: "normal",
    problem: "No Issues",
    oxygen: 0,
    pressure: "N/A",
    temperature: 41
  },

  communication: {
    name: "COMMUNICATION",
    status: "normal",
    problem: "No Issues",
    oxygen: 0,
    pressure: "N/A",
    temperature: 29
  },

  engine: {
    name: "PROPULSION",
    status: "normal",
    problem: "No Issues",
    oxygen: 0,
    pressure: "NORMAL",
    temperature: 48
  }

}



function HudCard({
  title,
  lines,
  style
}) {

  return (

    <div
      style={{
        position: "absolute",
        padding: "11px 14px",
        minWidth: "140px",
        background: "rgba(0,20,14,0.72)",
        border: "1px solid rgba(60,255,150,0.45)",
        color: "#a6ffd0",
        fontFamily: '"Courier New", monospace',
        fontSize: "11px",
        lineHeight: "1.45",
        boxShadow: "0 0 12px rgba(0,255,120,0.08)",
        backdropFilter: "blur(4px)",
        pointerEvents: "none",
        ...style
      }}
    >

      <div
        style={{
          color: "#42ff9a",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginBottom: "4px"
        }}
      >
        {title}
      </div>


      {lines.map((line, index) => (

        <div key={index}>
          {line}
        </div>

      ))}

    </div>

  )

}



function App() {

  const [
    selectedSystem,
    setSelectedSystem
  ] = useState(null)


  const [
    simulation,
    setSimulation
  ] = useState(null)


  const oxygenLeak =
    simulation === "oxygen_leak"


  const powerFailure =
    simulation === "power_failure"


  const isPowerCriticalSystem =
    powerFailure &&
    (
      selectedSystem === "power" ||
      selectedSystem === "solar_left" ||
      selectedSystem === "solar_right"
    )


  const isPowerWarningSystem =
    powerFailure &&
    (
      selectedSystem === "communication" ||
      selectedSystem === "life_support"
    )


  const isOxygenCriticalSystem =
    oxygenLeak &&
    selectedSystem === "life_support"


  const isOxygenWarningSystem =
    oxygenLeak &&
    selectedSystem === "crew"


  const isCriticalSystem =
    isPowerCriticalSystem ||
    isOxygenCriticalSystem


  const isWarningSystem =
    isPowerWarningSystem ||
    isOxygenWarningSystem


  const selectedTelemetry =
    selectedSystem
      ? {
          ...telemetry[selectedSystem],

          status:
            isCriticalSystem
              ? "critical"

              : isWarningSystem
              ? "warning"

              : "normal",

          problem:
            isPowerCriticalSystem
              ? "Power Generation Failure"

              : isPowerWarningSystem &&
                selectedSystem === "communication"
              ? "Communication Operating on Backup Power"

              : isPowerWarningSystem &&
                selectedSystem === "life_support"
              ? "Life Support Operating on Backup Power"

              : isOxygenCriticalSystem
              ? "Oxygen Leak Detected"

              : isOxygenWarningSystem
              ? "Cabin Atmosphere Affected"

              : "No Issues",

          oxygen:
            isOxygenCriticalSystem
              ? 62

              : isOxygenWarningSystem
              ? 88

              : isPowerWarningSystem &&
                selectedSystem === "life_support"
              ? 94

              : telemetry[selectedSystem].oxygen,

          pressure:
            isOxygenCriticalSystem
              ? "LOW"

              : isOxygenWarningSystem
              ? "DROPPING"

              : telemetry[selectedSystem].pressure,

          temperature:
            isPowerWarningSystem &&
            selectedSystem === "life_support"
              ? 24

              : isPowerWarningSystem &&
                selectedSystem === "communication"
              ? 34

              : telemetry[selectedSystem].temperature
        }
      : null



  const handleOxygenLeak = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/scenario/oxygen-leak",
        {
          method: "POST"
        }
      )


      if (!response.ok) {

        throw new Error(
          `Oxygen leak failed: ${response.status}`
        )

      }


      await response.json()


      setSimulation(
        "oxygen_leak"
      )


      setSelectedSystem(
        "life_support"
      )

    }

    catch (error) {

      console.error(
        "OXYGEN LEAK ERROR:",
        error
      )

    }

  }



  const handlePowerFailure = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/scenario/power-failure",
        {
          method: "POST"
        }
      )


      if (!response.ok) {

        throw new Error(
          `Power failure failed: ${response.status}`
        )

      }


      await response.json()


      setSimulation(
        "power_failure"
      )


      setSelectedSystem(
        "power"
      )

    }

    catch (error) {

      console.error(
        "POWER FAILURE ERROR:",
        error
      )

    }

  }



  const handleReset = async () => {

    try {

      await fetch(
        "http://127.0.0.1:8000/api/scenario/reset",
        {
          method: "POST"
        }
      )

    }

    catch (error) {

      console.error(
        "RESET ERROR:",
        error
      )

    }


    setSimulation(null)
    setSelectedSystem(null)

  }



  return (

    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        overflow: "hidden",
        position: "relative"
      }}
    >

      <SpaceScene
        simulation={simulation}
        onSystemSelect={
          setSelectedSystem
        }
      />


      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#5dffae",
          fontFamily: '"Courier New", monospace',
          fontSize: "12px",
          letterSpacing: "4px",
          opacity: 0.8,
          pointerEvents: "none"
        }}
      >
        SPACECRAFT DIGITAL TWIN
      </div>


      <HudCard
        title="COMMS"
        lines={[
          powerFailure
            ? "Signal: 74%"
            : "Signal: 99%",

          powerFailure
            ? "Latency: 380 ms"
            : "Latency: 120 ms"
        ]}
        style={{
          top: "10%",
          left: "9%",

          border:
            powerFailure
              ? "1px solid #ffd84a"
              : "1px solid rgba(60,255,150,0.45)",

          color:
            powerFailure
              ? "#ffe36a"
              : "#a6ffd0"
        }}
      />


      <HudCard
        title="POWER SYSTEM"
        lines={[
          powerFailure
            ? "Output: 0.0 kW"
            : "Output: 8.3 kW",

          powerFailure
            ? "Battery: 31%"
            : "Battery: 68%"
        ]}
        style={{
          top: "10%",
          left: "40%",

          border:
            powerFailure
              ? "1px solid #ff3c3c"
              : "1px solid rgba(60,255,150,0.45)",

          color:
            powerFailure
              ? "#ff7777"
              : "#a6ffd0"
        }}
      />


      <HudCard
        title="LIFE SUPPORT"
        lines={[
          oxygenLeak
            ? "O2: 62.0%"

            : powerFailure
            ? "O2: 94.0%"

            : "O2: 97.8%",

          oxygenLeak
            ? "Pressure: LOW"

            : powerFailure
            ? "Backup Power: ACTIVE"

            : "CO2: 0.54%"
        ]}
        style={{
          bottom: "18%",
          left: "27%",

          border:
            oxygenLeak
              ? "1px solid #ff3c3c"

              : powerFailure
              ? "1px solid #ffd84a"

              : "1px solid rgba(60,255,150,0.45)",

          color:
            oxygenLeak
              ? "#ff7777"

              : powerFailure
              ? "#ffe36a"

              : "#a6ffd0"
        }}
      />


      <HudCard
        title="PROPULSION"
        lines={[
          "Fuel: 77%",
          "Thermal: 39 C"
        ]}
        style={{
          bottom: "18%",
          right: "9%"
        }}
      />


      <EmergencyPanel
        simulation={simulation}
        onOxygenLeak={handleOxygenLeak}
        onPowerFailure={handlePowerFailure}
        onReset={handleReset}
      />


      {selectedTelemetry && (

        <div
          style={{
            position: "absolute",
            top: "25px",
            right: "25px",
            width: "280px",
            padding: "17px",
            background: "rgba(3,13,12,0.91)",
            color: "#dbffee",

            border:
              isCriticalSystem
                ? "1px solid #ff4747"

                : isWarningSystem
                ? "1px solid #ffd84a"

                : "1px solid rgba(60,255,150,0.40)",

            fontFamily: '"Courier New", monospace',
            fontSize: "12px",
            boxShadow: "0 0 18px rgba(0,255,120,0.06)"
          }}
        >

          <div
            style={{
              color:
                isCriticalSystem
                  ? "#ff6868"

                  : isWarningSystem
                  ? "#ffd84a"

                  : "#52ffad",

              letterSpacing: "1px",
              marginBottom: "13px",
              fontWeight: "bold"
            }}
          >
            {selectedTelemetry.name}
          </div>


          <div
            style={{
              marginBottom: "10px"
            }}
          >

            STATUS:{" "}

            <span
              style={{
                color:
                  isCriticalSystem
                    ? "#ff4d4d"

                    : isWarningSystem
                    ? "#ffd84a"

                    : "#58ff98"
              }}
            >

              {
                isCriticalSystem
                  ? "CRITICAL"

                  : isWarningSystem
                  ? "WARNING"

                  : "NORMAL"
              }

            </span>

          </div>


          <div
            style={{
              opacity: 0.85,
              marginBottom: "12px"
            }}
          >
            {selectedTelemetry.problem}
          </div>


          <hr
            style={{
              border:
                "1px solid rgba(255,255,255,0.1)"
            }}
          />


          <div
            style={{
              lineHeight: "1.8"
            }}
          >

            {
              selectedSystem === "power"
                ? (
                  <>
                    <div>
                      Output:{" "}
                      <strong>
                        {
                          powerFailure
                            ? "0.0 kW"
                            : "8.3 kW"
                        }
                      </strong>
                    </div>

                    <div>
                      Battery:{" "}
                      <strong>
                        {
                          powerFailure
                            ? "31%"
                            : "68%"
                        }
                      </strong>
                    </div>

                    <div>
                      Temperature:{" "}
                      <strong>
                        {
                          selectedTelemetry.temperature
                        } C
                      </strong>
                    </div>
                  </>
                )

                : selectedSystem === "communication"
                ? (
                  <>
                    <div>
                      Signal:{" "}
                      <strong>
                        {
                          powerFailure
                            ? "74%"
                            : "99%"
                        }
                      </strong>
                    </div>

                    <div>
                      Latency:{" "}
                      <strong>
                        {
                          powerFailure
                            ? "380 ms"
                            : "120 ms"
                        }
                      </strong>
                    </div>

                    <div>
                      Temperature:{" "}
                      <strong>
                        {
                          selectedTelemetry.temperature
                        } C
                      </strong>
                    </div>
                  </>
                )

                : (
                  <>
                    <div>
                      Oxygen:{" "}
                      <strong>
                        {selectedTelemetry.oxygen}%
                      </strong>
                    </div>

                    <div>
                      Pressure:{" "}
                      <strong>
                        {selectedTelemetry.pressure}
                      </strong>
                    </div>

                    <div>
                      Temperature:{" "}
                      <strong>
                        {
                          selectedTelemetry.temperature
                        } C
                      </strong>
                    </div>
                  </>
                )
            }

          </div>

        </div>

      )}

    </div>

  )

}


export default App