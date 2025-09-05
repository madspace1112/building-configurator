"use client";

import { Environment, Lightformer, Preload } from "@react-three/drei";
import { Scene } from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Loading } from "./Loading";
import { SettingColor } from "./SettingColor";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const Home = () => {
  const { value } = useSelector((state: RootState) => state.wallColor);
  return (
    <div className="relative size-full">
      <Loading />
      <SettingColor />
      <div
        className="absolute left-0 top-0 size-full"
        style={{
          background: `linear-gradient(#ffffff, ${value.color})`,
        }}
      >
        <Canvas
          camera={{
            position: [40, 10, 40],
            isPerspectiveCamera: true,
            fov: 20,
          }}
        >
          <Scene />
          <Environment files={["/env.hdr"]}>
            <Lightformer
              color="white"
              intensity={1}
              scale={[10, 2, 2]}
              position={[-2, 3, -3]}
            />
          </Environment>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};
