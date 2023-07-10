import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { mobileBalls } from "../assets";

const Tech = () => {
  return (
    <div>
      <img src={mobileBalls} alt="mobileBalls" />
    </div>
  );
};

export default SectionWrapper(Tech, "");
