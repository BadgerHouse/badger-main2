import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const GRID_SIZE = 20; // Daha yoğun grid
const SPACING = 1;    // Daha sık yerleşim


const InteractiveBox = ({ position, mousePosition }) => {
  const ref = useRef();

  useFrame(() => {
    if (!mousePosition.current) return;

    const distance = ref.current.position.distanceTo(mousePosition.current);
    const scaleY = 1 + Math.max(0, 2 - distance) * 0.5;
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, scaleY, 0.1);
  });

  return (
    <Box ref={ref} args={[1, 1, 1]} position={position}>
      <meshStandardMaterial color="#ffca28" />
    </Box>
  );
};

const InteractiveGridScene = () => {
  const { camera, mouse, viewport, gl, scene } = useThree();
  const mouseWorld = useRef(null);
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Y = 0 düzlem

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const mouseNDC = new THREE.Vector2(x, y); // Normalized Device Coordinates

      raycaster.setFromCamera(mouseNDC, camera);

      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectionPoint);

      mouseWorld.current = intersectionPoint;
    };

    gl.domElement.addEventListener('pointermove', handleMouseMove);
    return () => gl.domElement.removeEventListener('pointermove', handleMouseMove);
  }, [camera, gl]);

  const boxes = [];
  const offset = (GRID_SIZE - 1) * SPACING * 0.5;

  for (let x = 0; x < GRID_SIZE; x++) {
    for (let z = 0; z < GRID_SIZE; z++) {
      const posX = (x - z) * (SPACING * 0.5);
const posZ = (x + z) * (SPACING * 0.25);

      boxes.push(
        <InteractiveBox
          key={`${x}-${z}`}
          position={[posX, 0, posZ]}
          mousePosition={mouseWorld}
        />
      );
    }
  }
  

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.2} />
      {boxes}
    </>
  );
};

export default InteractiveGridScene;
