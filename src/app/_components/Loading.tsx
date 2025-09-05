"use client";

import DotLoader from "react-spinners/DotLoader";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loading = () => {
  const { progress } = useProgress();
  const bg = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState(false);
  const fadeOut = () => {
    gsap.to(bg.current, {
      duration: 2,
      ease: "power1.out",
      opacity: 0,
      onComplete: () => {
        setHide(true);
      },
    });
  };
  useEffect(() => {
    if (progress === 100) fadeOut();
  }, [progress]);

  return hide ? null : (
    <div
      className="pointer-events-none absolute left-0 top-0 z-50 flex size-full flex-col items-center justify-center gap-7 bg-[#19191D]"
      ref={bg}
    >
      <p className="select-none whitespace-nowrap text-2xl uppercase tracking-widest text-[#20F5F5]">
        Loading
      </p>
      <DotLoader
        color={"#20F5F5"}
        loading={true}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
