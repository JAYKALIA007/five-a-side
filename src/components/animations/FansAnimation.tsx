import Lottie from "lottie-react";
import fans from "../../assets/lotties/fans.json";

export const FansAnimation = () => {
  return (
    <Lottie
      style={{ height: 120, width: 250 }}
      animationData={fans}
      loop={false}
      autoPlay={true}
    />
  );
};
