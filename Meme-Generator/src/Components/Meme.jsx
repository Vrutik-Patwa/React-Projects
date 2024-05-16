import React, { useState } from "react";
import MemesData from "./MemesData";
const Meme = () => {
  const [url, setUrl] = useState();

  function GenerateMeme(e) {
    const memesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // Math.random generates between 0 to 1
    // console.log(randomNumber);
    e.preventDefault();
    // So the websites dosent get rerender on clicking a button so we preventingits default functions

    setUrl(memesArray[randomNumber].url);
    console.log(url);
  }
  return (
    <main className="w-full h-full">
      <form className="flex flex-col  gap-1 ">
        <div className="flex mt-[28px] ml-auto mr-auto">
          <div className="w-[222px] h-[55px]">
            <h3>Top Text</h3>
            <input
              className="p-2 border-[1px] border-solid outline-none border-input rounded-lg"
              type="text"
            />
          </div>
          <div className="w-[222px] h-[55px]">
            <h3>Bottom Text</h3>
            <input
              className="p-2 border-solid border-input border-[1px] rounded-lg outline-none"
              type="text"
            />
          </div>
        </div>
        <div className="mt-[15px] ml-auto mr-auto flex">
          <button
            className="text-white liner-gradient-header w-[424px] h-[40px] rounded-md mr-5"
            onClick={GenerateMeme}
          >
            Get a new Image
          </button>
        </div>
        <div className="flex w-full justify-center mt-8">
          <img src={url} className="w-[477px] h-[268px]" alt="" />
        </div>
      </form>
    </main>
  );
};

export default Meme;
