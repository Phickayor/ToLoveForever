import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="lg:px-20 p-8 flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl md:leading-[4rem] leading-[3rem] lg:text-7xl lg:leading-[6rem]">
          You are welcome to #Odunayo and Tobiloba wedding Lots of love💗
        </h1>
      </div>
      <div className="p-5 lg:p-10 flex gap-8 overflow-x-auto">
        <img
          src="/images/couple 1.jpeg"
          className=" hover:flex-1 h-96 object-cover rounded-lg"
        />
        <img
          src="/images/couple 2.jpeg"
          className="h-96 object-cover rounded-lg"
        />
        <img
          src="/images/casual.jpeg"
          className="h-96 object-cover rounded-lg"
        />
        <img
          src="/images/Introduction.jpeg"
          className="h-96 object-cover rounded-lg"
        />
        <img
          src="/images/proposal.jpeg"
          className="h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
