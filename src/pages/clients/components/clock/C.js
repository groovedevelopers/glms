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

const getNumbers = index => {
  const numerals = ['12', '*', '*', '3', '*', '*', '6', '*', '*', '9', '*', '*'];

  return numerals[index];
};

const Clock = ({ className, size }) => {
  const time = useClock('sydney');

  return (
    <Circle size={size} className={className}>
{marks.map((_, i) => {
  return (
    <Mark
      key={i}
      size={size}
      rotation={i * 30 + "deg"}
    >
      {getNumbers(i)}
    </Mark>
  );
})}
<Hands time={time} borderWidth={10} />
</Circle>
  );
};

const StyledClock = styled(Clock)`
  position: relative;
  background-size: cover;
`;

export default StyledClock;
