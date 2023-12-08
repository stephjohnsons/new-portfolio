import React from "react";
import LottiePlayer from "@lottiefiles/react-lottie-player";

const Lottie = () => {
  const animationURL = "https://lottie.host/embed/1462331b-0d0f-44bf-8f2a-52d004b2e67a/gcXPSTtHcl.json";

  return (
    <LottiePlayer
      animationURL={animationURL}
      autoplay
      loop
      speed={1}
    />
  );
};

export default Lottie;