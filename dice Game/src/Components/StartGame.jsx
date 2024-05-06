import styled from "styled-components";
import React from "react";

const StartGame = ({ toggle }) => {
  console.log(toggle);
  return (
    <Container>
      <div>
        <img src="images/dices 1.png" alt="png" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 6px;
  border: 1px solid transparent;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
