import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from "./Hands";

const marks = Array(12).fill();

const Mark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${props => props.rotation || "0deg"});
  transform-origin: center 130px;
`;

const getRomanNumeral = index => {
  const numerals = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

  return numerals[index];
};

const Clock = ({ className, size }) => {
  const time = useClock('tokyo');

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
