import React from "react";

const Hero = () => {
  return (
    <section className="">
      <img
        src="images/cover.png"
        className="w-[980px] h-[564px] ml-auto mr-auto mt-20"
        alt=""
      />
      <div className="mt-20 ml-56">
        <h1 className="font-bold text-6xl">Online Experiences</h1>
        <p className="mt-4 font-light ml-1 text-xl">
          Join Unique interactive elements led by one-of-a-kind hosts <br></br>
          all without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
