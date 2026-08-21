export default function LifeSupport({
  onSelect,
  active
}) {

  return (

    <group
      position={[1.47, -0.2, -0.25]}
      onClick={(event) => {

        event.stopPropagation();
        onSelect();

      }}
    >

      {/* LIFE SUPPORT BODY */}

      <mesh>

        <boxGeometry
          args={[0.34, 0.70, 0.75]}
        />

        <meshStandardMaterial

          color={
            active
              ? "#9e2020"
              : "#505557"
          }

          emissive={
            active
              ? "#ff0000"
              : "#000000"
          }

          emissiveIntensity={
            active
              ? 2
              : 0
          }

          metalness={0.7}
          roughness={0.3}

        />

      </mesh>


      {/* WARNING LIGHT */}

      <mesh
        position={[0.19, 0.22, 0]}
      >

        <sphereGeometry
          args={[0.07, 16, 16]}
        />

        <meshStandardMaterial

          color={
            active
              ? "#ff0000"
              : "#42ff8b"
          }

          emissive={
            active
              ? "#ff0000"
              : "#00ff66"
          }

          emissiveIntensity={2}

        />

      </mesh>

    </group>

  );
}