import React from "react";
import NavBar from "./NavBar";

function Hero() {
  var images = [
    "/images/couple 1.jpeg",
    "/images/Introduction.jpeg",
    "/images/couple 2.jpeg",
    "/images/casual.jpeg",
    "/images/proposal.jpeg"
  ];
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="text-center lg:text-left lg:px-20 p-5 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold md:text-5xl md:leading-[4rem] leading-[3rem] lg:text-7xl lg:leading-[6rem]">
          You are welcome to #Odun and Tobi's wedding Lots of love💗
        </h1>
      </div>
      <div className="p-5 lg:p-10 flex  gap-8 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="max-h-48 lg:max-h-72 min-w-96 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
