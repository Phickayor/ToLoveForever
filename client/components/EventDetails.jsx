import React from "react";

function EventDetails() {
  return (
    <div className="py-10 mx-auto w-11/12">
      <div className="mx-auto w-10/12 grid grid-cols-3 gap-8">
        <div className="border-2 rounded-xl text-center p-12 space-y-2 flex flex-col justify-center">
          <img src="/images/bell.png" className="self-center" />
          <h3 className="Font-medium text-3xl">Odunayo and Tobi's Reception</h3>
          <p className="text-lg">
            11<sup>th</sup> November 2023
          </p>
          <h6 className="text-lg">11:00am</h6>
        </div>
        <div className="border-2 rounded-xl text-center p-12 space-y-2 flex flex-col justify-center">
          <img src="/images/bell.png" className="self-center" />
          <h3 className="Font-medium text-3xl">Odunayo and Tobi's Reception</h3>
          <p className="text-lg">
            11<sup>th</sup> November 2023
          </p>
          <h6 className="text-lg">11:00am</h6>
        </div>
        <div className="border-2 rounded-xl text-center p-12 space-y-2 flex flex-col justify-center">
          <img src="/images/bell.png" className="self-center" />
          <h3 className="Font-medium text-3xl">Odunayo and Tobi's Reception</h3>
          <p className="text-lg">
            11<sup>th</sup> November 2023
          </p>
          <h6 className="text-lg">11:00am</h6>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
