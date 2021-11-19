import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from './Hands'

const marks = Array(12).fill();

const Mark = styled(Circle)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transform: rotate(${props => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 135px;
`;

const Clock = ({ className, size }) => {
  const time = useClock('london');

  const getRomanNumeral = index => {
    const numerals = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  
    return numerals[index];
  };

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => {
        return (
          <Mark
            key={i}
            size={size}
            rotation={i * 30 + "deg"}
          >
            {getRomanNumeral(i)}
          </Mark>
        );
      })}
      <Hands time={time} borderWidth={10} />
    </Circle>
  );
};

const StyledClock = styled(Clock)`
  position: relative;
  z-index: 1;
`;

export default StyledClock;
