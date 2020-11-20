import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { GlitchPass } from '../../post/Glitchpass';
import { extend, useThree, useFrame } from 'react-three-fiber';

extend({ EffectComposer, RenderPass, UnrealBloomPass, GlitchPass, FilmPass, SMAAPass, ShaderPass });

export default function Effects({ mouseDown }) {
  const composer = useRef();

  const { gl, scene, camera, size } = useThree();

  const bloomAspect = useMemo(() => {
    return new THREE.Vector2(512, 512);
  }, []);

  

  useEffect(() => composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)

  return(
    <effectComposer ref={composer} args={[gl]} >
      <renderPass attachArray='passes' scene={scene} camera={camera} />
      <sMAAPass attachArray='passes' args={[scene, camera]} kernelRadius={0.6} maxDistance={0.03} />
      <shaderPass
        attachArray="passes"
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      />
      <unrealBloomPass attachArray='passes' args={[bloomAspect, .6, 1.1, .3]} />
      <filmPass attachArray='passes' args={[0.1, 0.4, 1000, 0]} />
      <glitchPass attachArray='passes' factor={mouseDown ? 1 : 0} />
    </effectComposer>
  )
}