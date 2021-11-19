import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from './Hands';
// import "../../../../assets/css/clients/style.css"

const marks = Array(12).fill();
const Mark = styled.div`
  position: absolute;
  width: 1px;
  height: 30px;
  
  border-radius: 50px;
  top: 10px;
  left: 50%;
  transform: rotate(${props => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 130px;
`;
const getNumbers = index => {
  const numerals = ['12', '*', '*', '3', '*', '*', '6', '*', '*', '9', '*', '*'];

  return numerals[index];
};


const Clock = ({ className, size }) => {
  
  const time = useClock('new-york');

  return (
    // <Circle size={size} className={className}>
    //   {marks.map((_, i) => (
    //     <Mark key={i} size={size} rotation={i * 30 + "deg"} />
    //   ))}
    //   <Hands time={time} />
    // </Circle>

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
  background: transparent;
  object-fit:contain;
`;

export default StyledClock;
