import React from "react";
import styled from "styled-components";
const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;

  display: flex;
  flex-direction: column;
  gap: 0px;

  h1 {
    font-size: 100px;
    line-height: 100px;
    text-align: center;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
`;
