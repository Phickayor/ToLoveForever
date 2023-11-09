import React from "react";

function Hero() {
  var images = [
    "/images/pic10.jfif",
    "/images/couple 1.jpeg",
    "/images/pic2.jfif",
    "/images/Introduction.jpeg",
    "/images/pic9.jfif",
    "/images/pic1.jfif",
    "/images/couple 2.jpeg",
    "/images/casual.jpeg",
    "/images/pic6.jfif",
    "/images/pic3.jfif",
    "/images/pic4.jfif",
    "/images/pic8.jfif",
    "/images/pic7.jfif"
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="py-8">
      <div className="mx-auto w-10/12">
        <h1 className="text-4xl lg:text-8xl text-center">
          Your are welcome to #Odunayo and Tobiloba's wedding Lots of love 💗
        </h1>
        <div className="w-fit mx-auto  py-8 ">
          <button
            onClick={() => scrollToSection("gift-details")}
            className="border-2 hover:scale-110 duration-300 border-black rounded-xl px-10 lg:px-20 py-2 lg:py-3 text-2xl lg:text-5xl"
          >
            Send a gift
          </button>
        </div>
      </div>
      <div className="py-10  overflow-hidden">
        <div className="scroll-container flex gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="min-w-[240px] lg:min-w-[285px] h-[250px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
