import React from "react";

function Card() {
  return (
    <section className=" py-20">
      <div className="mx-auto space-y-6 lg:w-1/2 w-9/12 bg-black shadow-xl shadow-orange-500 rounded-xl text-white p-5">
        <div className="flex justify-between font-semibold ">
          <h1 className="bg-green-500 p-2 text-sm rounded-lg rounded-r-full">Access Card</h1>
          <h1 className="text-green-500">#TOLoveForever</h1>
        </div>
        <div className="flex flex-col">
          <img src="/favicon.ico" className="w-16 self-center" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="font-semibold text-xl">Odunayo & Tobiloba</h1>
          <p>
            Saturday, November 11<sup>th</sup> 2023
          </p>
          <p>
            <b>Time : </b>1:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
