import React from "react";

function Gifting() {
  return (
    <div className="space-y-6 py-4" id="gift-details">
      <div className="space-y-2 mx-auto w-9/12 text-center ">
        <h1 className="text-3xl lg:text-6xl">Gift the Couple</h1>
      </div>
      <form className="mx-auto w-10/12 lg:w-8/12 bg-[#EDEDED] flex flex-col justify-center py-10 space-y-8 text-xl lg:text-2xl text-center lg:text-left ">
        <div className="bg-[#D9D9D9] focus:outline-none p-4 px-10 mx-auto w-10/12">
          Bank
        </div>
        <div className="bg-[#D9D9D9] focus:outline-none p-4 px-10 mx-auto w-10/12">
          Account number and Name
        </div>
      </form>
    </div>
  );
}

export default Gifting;
