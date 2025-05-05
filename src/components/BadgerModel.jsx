// components/BadgerModel.jsx
import { useFBX } from '@react-three/drei';

const BadgerModel = ({ position = [0, 0, 0], scale = 0.01, rotation = [0, 0, 0] }) => {
  const model = useFBX('/models/BadgerLogo.fbx');

  return (
    <primitive object={model} position={position} scale={scale} rotation={rotation} />
  );
};

export default BadgerModel;
