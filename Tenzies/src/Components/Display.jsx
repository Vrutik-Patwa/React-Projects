import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
const Display = () => {
  const [dice, setDice] = useState(newDice());
  function newDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      });
    }
    return dice;
  }

  console.log(newDice());
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? { ...die }
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
  }

  function holdDice(id) {
    // console.log(id);
    setDice((oldDice) =>
      oldDice.map((die) => {
        return id == die.id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const diceElements = dice.map((number) => {
    return (
      <div key={number.id}>
        <Die
          number={number.value}
          isHeld={number.isHeld}
          holdDice={() => holdDice(number.id)}
        />
      </div>
    );
  });
  return (
    <div className="h-[756px] w-[756px] flex justify-center items-center bg-gamebd">
      <div className="bg-gamebg w-[86%] h-[86%] rounded-2xl flex flex-col items-center ">
        <div className="font-bold text-4xl mt-16">Tenzies</div>
        <div className="font-light text-2xl whitespace-pre-line mt-8 text-center ">
          Roll until all dice are the same. Click <br />
          each die to freeze it at its current value <br />
          between rolls
        </div>
        <div className="mt-12">
          <div className="grid grid-rows-2 grid-cols-5 gap-x-12 gap-y-10">
            {/* <Die number="1" />
            <Die number="2" />
            <Die number="3" />
            <Die number="4" />
            <Die number="5" />
            <Die number="6" />
            <Die number="6" />
            <Die number="6" />
            <Die number="6" />
            <Die number="6" /> */}
            {diceElements}
          </div>
        </div>
        <button
          className="mt-10 text-2xl font-bold bg-buttoncl text-white py-4 px-9 rounded-lg"
          onClick={rollDice}
        >
          Roll
        </button>
      </div>
    </div>
  );
};

export default Display;
