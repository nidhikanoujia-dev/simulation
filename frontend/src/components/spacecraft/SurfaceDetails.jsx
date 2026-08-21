export default function SurfaceDetails() {

  return (

    <group>

      {[
        [-0.85, 1.22, -0.9],
        [0.45, 1.37, -0.7],
        [0.95, 1.05, 0.2],
        [-0.65, 1.30, 0.7],
        [0.25, 1.38, 0.9]

      ].map((position, index) => (

        <mesh
          key={index}
          position={position}
        >

          <boxGeometry
            args={[
              0.25,
              0.18,
              0.32
            ]}
          />

          <meshStandardMaterial
            color={
              index % 2 === 0
                ? "#464a4c"
                : "#707476"
            }
            metalness={0.8}
            roughness={0.35}
          />

        </mesh>

      ))}

    </group>
  );
}