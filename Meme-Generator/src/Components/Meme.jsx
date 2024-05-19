import React, { useEffect, useState } from "react";
// import MemesData from "./MemesData";

const Meme = (props) => {
  const [url, setUrl] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3lmzyx.jpg",
  });

  const [allMemes, setAllmemes] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setAllmemes(data.data.memes));

  //   // console.log(allMemes);
  // }, []);

  // This can be done using async too which will be done linearly

  // useEffect(async () => {
  //   const res = await fetch("https://api.imgflip.com/get_memes");
  //   const data = await res.json();
  //   setAllmemes(data.data.memes);
  //   console.log(allMemes);
  // }, []);

  // This wont work due to returning

  useEffect(() => {
    const allmemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllmemes(data.data.memes);
    };
    allmemes();
  }, []);
  function GenerateMeme(e) {
    // const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    // Math.random generates between 0 to 1
    // console.log(randomNumber);
    e.preventDefault();
    // So the websites doesn't get rerender on clicking a button so we preventinzg its default functions
    const meme = allMemes[randomNumber].url;
    setUrl((prevState) => ({
      ...prevState,
      randomImage: meme,
    }));

    console.log(url.randomImage);
    // console.log(url);
  }
  function handleChange(e) {
    setUrl((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
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
              placeholder="Top-Text"
              name="topText"
              value={url.topText}
              onChange={handleChange}
            />
          </div>
          <div className="w-[222px] h-[55px]">
            <h3>Bottom Text</h3>
            <input
              className="p-2 border-solid border-input border-[1px] rounded-lg outline-none w-[222px]"
              type="text"
              placeholder="Bottom-text"
              name="bottomText"
              value={url.bottomText}
              onChange={handleChange}
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
            <div className="relative flex justify-center">
              <button onClick={props.func}>
                <h2 className="font-bold text-white text-4xl absolute w-full text-stroke ">
                  {url.topText}
                </h2>
                <img
                  src={url.randomImage}
                  className="w-[477px] h-[268px] outline-none border-none"
                  alt="Url not found"
                />
                <h2 className="font-bold text-white text-4xl stroke-black  absolute w-full top-[220px] text-stroke">
                  {url.bottomText}
                </h2>
              </button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default Meme;
