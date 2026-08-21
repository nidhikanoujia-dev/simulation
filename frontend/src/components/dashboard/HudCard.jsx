export default function HudCard({
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

        background:
          "rgba(0, 20, 14, 0.72)",

        border:
          "1px solid rgba(60,255,150,0.45)",

        color: "#a6ffd0",

        fontFamily:
          '"Courier New", monospace',

        fontSize: "11px",

        lineHeight: "1.45",

        boxShadow:
          "0 0 12px rgba(0,255,120,0.08)",

        backdropFilter:
          "blur(4px)",

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
  );
}