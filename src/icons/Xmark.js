import React from "react";
import Svg, { Path } from "react-native-svg";

const Xmark = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9.41087L18.5775 0.833374L19.1667 1.42254L10.5892 10L19.1667 18.5775L18.5775 19.1667L10 10.5892L1.42254 19.1667L0.833374 18.5775L9.41087 10L0.833374 1.42254L1.42254 0.833374L10 9.41087Z"
        fill="#1B1A18"
      ></Path>
    </Svg>
  );
};

export default Xmark;
