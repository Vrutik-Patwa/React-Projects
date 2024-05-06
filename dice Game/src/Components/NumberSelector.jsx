import styled from "styled-components";
import { useState } from "react";
const NumberSelector = () => {
  const arr_num = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setselectedNumber] = useState();
  console.log(selectedNumber);

  return (
    <BoxContainer>
      {arr_num.map((value, i) => (
        <Box onClick={}key={i}>{value}</Box>
      ))}
    </BoxContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-in;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  width: 552px;
  height: 72px;
  justify-content: space-evenly;
`;
