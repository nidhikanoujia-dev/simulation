function EmergencyPanel({
  simulation,
  onOxygenLeak,
  onPowerFailure,
  onReset
}) {
  const oxygenLeak = simulation === "oxygen_leak"
  const powerFailure = simulation === "power_failure"

  const buttonStyle = {
    width: "100%",
    padding: "11px",
    marginBottom: "10px",
    fontFamily: '"Courier New", monospace',
    cursor: "pointer",
    transition: "0.2s"
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "25px",
        bottom: "25px",
        width: "230px",
        padding: "15px",
        background: "rgba(2, 12, 10, 0.90)",
        border: "1px solid rgba(69,255,166,0.35)",
        color: "#d7ffe9",
        fontFamily: '"Courier New", monospace',
        zIndex: 10
      }}
    >
      <div
        style={{
          color: "#55ffaa",
          fontSize: "12px",
          letterSpacing: "1px",
          marginBottom: "14px",
          fontWeight: "bold"
        }}
      >
        EMERGENCY SIMULATION
      </div>

      <button
        onClick={onOxygenLeak}
        style={{
          ...buttonStyle,
          background: oxygenLeak
            ? "#8b1f25"
            : "rgba(80,20,20,0.65)",
          border: oxygenLeak
            ? "2px solid #ffae35"
            : "1px solid #b8444b",
          color: "#ff9b9f"
        }}
      >
        OXYGEN LEAK
      </button>

      <button
        onClick={onPowerFailure}
        style={{
          ...buttonStyle,
          background: powerFailure
            ? "#735800"
            : "rgba(55,48,10,0.65)",
          border: powerFailure
            ? "2px solid #ffd84a"
            : "1px solid #8c782e",
          color: powerFailure
            ? "#fff06a"
            : "#d6c76c"
        }}
      >
        POWER FAILURE
      </button>

      <button
        onClick={onReset}
        style={{
          ...buttonStyle,
          marginBottom: 0,
          background: "rgba(10,55,40,0.7)",
          border: "1px solid #347b61",
          color: "#8affc8"
        }}
      >
        RESET
      </button>
    </div>
  )
}

export default EmergencyPanel