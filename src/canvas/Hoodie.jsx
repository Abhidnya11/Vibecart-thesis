import { Canvas } from "@react-three/fiber";
import React from "react";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Environment,
} from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/hoodie.glb");
  return <primitive object={scene} {...props} />;
}

const Hoodie = () => {
  return (
    <Canvas>
      <color attach="background" args={["#FFF"]} />
      <PresentationControls
        speed={2.5}
        global
        zoom={0.4}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage>
          <Environment preset="city" />
          <Model scale={4.2} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default Hoodie;
