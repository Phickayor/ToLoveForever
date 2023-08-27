import React from "react";

function Reservation() {
  return (
    <div className="space-y-6 py-4">
      <div className="lg:space-y-2 mx-auto w-10/12 text-center ">
        <h1 className="text-3xl font-semibold lg:text-4xl">Make your Reservations</h1>
        <p className="lg:text-lg">
          Input details to make your reservations and get your access card .
        </p>
      </div>
      <form className="mx-auto w-10/12 lg:w-8/12 bg-[#EDEDED] flex flex-col justify-center py-10 space-y-8">
        <input
          type="text"
          className="bg-[#D9D9D9] focus:outline-none lg:text-2xl text-lg
           mx-auto w-10/12 p-4 text-center"
          placeholder="Name of Reservation"
        />
        <input
          type="text"
          className="bg-[#D9D9D9] focus:outline-none lg:text-2xl text-lg  mx-auto w-10/12 p-4 text-center"
          placeholder="Amount of Payment"
        />

        <input
          type="submit"
          className="bg-[#131725] rounded-xl lg:py-6 lg:text-xl text-lg py-4 px-8 lg:px-10 text-center text-white mx-auto flex justify-center"
          value="Make payment"
        />
      </form>
    </div>
  );
}

export default Reservation;
