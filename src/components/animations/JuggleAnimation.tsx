import Lottie from "lottie-react";
import React from "react";
import footballJuggle from "../../assets/lotties/footballJuggle.json";
export const JuggleAnimation = () => {
  return (
    <Lottie
      style={{ height: 330, width: "100%" }}
      animationData={footballJuggle}
      loop={true}
      autoPlay={true}
    />
  );
};
