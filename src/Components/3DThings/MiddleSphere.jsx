import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Html } from "drei";


export default function Sphere({ position, rotation, color, args, clas }) {
  const mesh = useRef();


  return (
    <mesh
      ref={mesh}
      userData={{ test: "hello" }}
      position={position}
      rotation={rotation}
      castShadow
    >
      <sphereGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.1}
        metalness={0.1}
      />
      <Html scaleFactor={10}>
        
      </Html>
    </mesh>
  );
}