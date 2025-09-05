"use client";

import { Environment, Lightformer, Preload } from "@react-three/drei";
import { Scene } from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Loading } from "./Loading";
import { SettingColor } from "./SettingColor";

export const Home = ({ device }: { device: string }) => {
  return (
    <div className="relative size-full">
      <Loading />
      <SettingColor />
      <div
        className="absolute left-0 top-0 size-full"
        style={{
          background: `linear-gradient(#ffffff, #3A3A3AFF)`,
        }}
      >
        <Canvas
          camera={{
            position: device === "mobile" ? [100, 10, 100] : [40, 10, 40],
            isPerspectiveCamera: true,
            fov: 20,
          }}
        >
          <Scene device={device} />
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
