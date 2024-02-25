import Lottie from "lottie-react";
import confetti from "../assets/lotties/confetti.json";
export const ConfettiAnimation = () => {
  return (
    <Lottie
      style={{ height: 120, width: 250 }}
      animationData={confetti}
      loop={false}
      autoPlay={true}
    />
  );
};
