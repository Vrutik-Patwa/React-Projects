import React, { useState } from "react";
import MemesData from "./MemesData";
const Meme = (props) => {
  const [url, setUrl] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3lmzyx.jpg",
  });

  function GenerateMeme(e) {
    const memesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // Math.random generates between 0 to 1
    // console.log(randomNumber);
    e.preventDefault();
    // So the websites doesn't get rerender on clicking a button so we preventinzg its default functions
    const meme = memesArray[randomNumber].url;
    setUrl((prevState) => ({
      ...prevState,
      randomImage: meme,
    }));

    console.log(url.randomImage);
    // console.log(url);
  }
  return (
    <main className="w-full h-full">
      <form className="flex flex-col  gap-1 ">
        <div className="flex flex-row mt-[28px] justify-evenly">
          <div className="w-[222px] h-[55px]">
            <h3>Top Text</h3>
            <input
              className="p-2 border-[1px] border-solid outline-none border-input rounded-lg w-[222px]"
              type="text"
            />
          </div>
          <div className="w-[222px] h-[55px]">
            <h3>Bottom Text</h3>
            <input
              className="p-2 border-solid border-input border-[1px] rounded-lg outline-none w-[222px]"
              type="text"
            />
          </div>
        </div>
        <div className="mt-[15px] ml-auto mr-auto flex">
          <button
            className="text-white liner-gradient-header w-[477px] h-[40px] rounded-md mt-3 mb-[-15px]"
            onClick={GenerateMeme}
          >
            Get a new Image
          </button>
        </div>
        <div className="flex w-full justify-center mt-8 border-none">
          {url.randomImage && (
            <button onClick={props.func}>
              <img
                src={url.randomImage}
                className="w-[477px] h-[268px] outline-none border-none"
                alt="Url not found"
              />
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default Meme;
