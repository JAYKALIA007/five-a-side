import Lottie from "lottie-react";
import footballKick from "../../assets/lotties/footballKick.json";

export const FootballKickAnimation = () => {
  return (
    <Lottie
      style={{ height: "100%", width: "100%" }}
      animationData={footballKick}
      loop={true}
      autoPlay={true}
    />
  );
};
