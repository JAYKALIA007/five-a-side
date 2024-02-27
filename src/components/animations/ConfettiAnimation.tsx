import Lottie from "lottie-react";
import confetti from "../../assets/lotties/confetti.json";
export const ConfettiAnimation = () => {
  return (
    <Lottie
      style={{ height: "100%", width: "100%" }}
      animationData={confetti}
      loop={false}
      autoPlay={true}
    />
  );
};
