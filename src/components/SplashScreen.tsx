import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Define animation function
  const animate = () => {
    const tl = gsap.timeline({
      onComplete: finishLoading,
    });
    tl.to(".logo", { duration: 0.6, scale: 0, ease: "slow.inOut" });
    tl.to(".screen", { duration: 0.6, y: "100%", ease: "slow.inOut" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout); // clear timeout only on unmount
  }, []);

  // Trigger animation once mounted
  useEffect(() => {
    if (isMounted) {
      animate();
    }
  }, [isMounted]);

  return (
    <div className="screen w-screen h-screen bg-black text-white">
      <div className="logo font-montserrat flex font-bold h-full overflow-hidden justify-center items-center text-2xl">
        enovo
        <div className="font-light">/interior</div>
      </div>
    </div>
  );
};

export default SplashScreen;
