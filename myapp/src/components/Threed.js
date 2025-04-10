"use client"
import './Threed.css'
import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';


//https://sketchfab.com/3d-models/eve-wall-e-eva-5da3637249074ed79f44fd958889c2ac#download



function AnimatedModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/eve.glb');
  const mixerRef = useRef(null);

  useEffect(() => {
    if (animations && animations.length) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play();
      });
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <primitive ref={group} object={scene} />;
}

  

const Threed = () => {


  return (
    <div className="h-[500px] w-full relative">
        {/* <div className='welcome text-5xl absolute text-green-500' style={{top:"50%", left:"50%", transform:"-50% -50%"}}>Welcome to India</div> */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <OrbitControls
         enableZoom={false}
         />
        <AnimatedModel />
      </Canvas>
    </div>

  )
}

export default Threed
