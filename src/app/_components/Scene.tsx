/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/store";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSelector } from "react-redux";

export const Scene = ({ device }: { device: string }) => {
  const { scene, materials }: any = useGLTF("/building.glb");

  const { value } = useSelector((state: RootState) => state.wallColor);
  useFrame((state, delta) => {
    easing.dampC(materials["Mat.3_0"].color, value.color.wall, 0.25, delta);
    easing.dampC(materials["Mat.4"].color, value.color.roof, 0.25, delta);
  });
  return (
    <group>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        maxDistance={device === "mobile" ? 100 : 50}
        minDistance={device === "mobile" ? 50 : 20}
        enablePan={false}
      />
      <primitive object={scene.clone()} position={[0, -2, 0]} />
    </group>
  );
};
