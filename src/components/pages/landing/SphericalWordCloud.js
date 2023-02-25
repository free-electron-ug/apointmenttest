import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import React from 'react';

let MyList = [
  'Satisfaction',
  'Motivation',
  'Quality',
  'Perfection',
  'Online Presence',
  'Digitisation ',
  'AI',
  'Marketing',
  'Sales',
  'Webapp',
  'Call Center',
  'CRM',
  'E Commerce',
  'Analytics',
  'LMS',
  'Management',
  'Industry 4.0',
  'KI',
  'Power',
  'Control',
  'Support Desk',
  'SaaS',
  'Technical Apps',
  'Welding',
  'Metal Industry',
  'Hydraulic',
  'Communication',
  'Team Work',
  'Smart working',
  'Future',
  'Win'
];
function wordFromMyList(i, j) {
  return MyList[i * 4 + j];
}
// eslint-disable-next-line react/prop-types
function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: '/Inter-Bold.woff',
    fontSize: 2,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = e => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log('clicked')}
      {...props}
      {...fontProps}
    >
      {children}
    </Text>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          wordFromMyList(i, j)
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ));
}

export default function SphericalWordCloud() {
  return (
    <div style={{ width: '60vw', height: '80vh' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog color={['#202025', 0, 80]} />
        <Cloud count={8} radius={20} />
        {/*<TrackballControls />*/}
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={1}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
