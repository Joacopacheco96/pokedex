import React from "react";

import { useState } from "react";

import Database from "../../Database/Database";

const SlideButtons = () => {
  const slide = [Database];
  const [carousel, setcarousel] = useState(0);

  const handleLeftClick = () => {
    if (carousel == 0) {
      setcarousel(slide.length - 1);
    } else {
      setcarousel((previousState) => {
        return previousState - 1;
      });
    }
  };

  const handleRigthClick = () => {
    if (carousel == slide.length - 1) {
      setcarousel(0);
    } else {
      setcarousel((previousState) => {
        return previousState + 1;
      });
    }
  };
};
