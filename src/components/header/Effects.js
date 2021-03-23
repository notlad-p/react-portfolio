import React, { useRef, useEffect } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { GlitchPass } from "../../post/Glitchpass";
import { extend, useThree, useFrame } from "react-three-fiber";

extend({
  EffectComposer,
  RenderPass,
  GlitchPass,
});

export default function Effects({ mouseDown }) {
  const composer = useRef();

  const { gl, scene, camera, size } = useThree();
  useEffect(() => composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <glitchPass attachArray="passes" factor={mouseDown ? 1 : 0} />
    </effectComposer>
  );
}
