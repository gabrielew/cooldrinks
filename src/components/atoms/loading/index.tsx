import React from "react";
import Lottie from "react-lottie";
import loading from "../../../assets/loading.json";

const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={22}
        width={22}
      />
    </div>
  );
};

export default Loading;
