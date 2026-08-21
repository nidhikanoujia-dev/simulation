import * as THREE from "three";

export default function Communication({
  onSelect
}) {

  return (

    <group
      position={[-0.55, 1.65, -0.25]}
      onClick={(event) => {

        event.stopPropagation();
        onSelect();

      }}
    >

      {/* MAST */}

      <mesh
        position={[0, 0.4, 0]}
      >

        <cylinderGeometry
          args={[
            0.045,
            0.06,
            0.8,
            16
          ]}
        />

        <meshStandardMaterial
          color="#9da1a1"
          metalness={0.9}
          roughness={0.25}
        />

      </mesh>


      {/* DISH */}

      <mesh
        position={[0, 0.82, 0]}
        rotation={[Math.PI, 0, 0]}
      >

        <coneGeometry
          args={[
            0.38,
            0.16,
            32,
            1,
            true
          ]}
        />

        <meshStandardMaterial
          color="#c7c9c8"
          metalness={0.85}
          roughness={0.22}
          side={THREE.DoubleSide}
        />

      </mesh>


      {/* DISH CENTER */}

      <mesh
        position={[0, 0.76, 0]}
      >

        <sphereGeometry
          args={[0.07, 16, 16]}
        />

        <meshStandardMaterial
          color="#333333"
          metalness={0.8}
        />

      </mesh>

    </group>

  );
}