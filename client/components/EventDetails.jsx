import React from "react";

function EventDetails() {
  var events = [
    {
      name: "Odunayo and Tobi's Reception",
      date: "Sat Nov 11, 2023",
      time: "11:00am"
    },
    {
      name: "Odunayo and Tobi's Reception",
      date: "Sat Nov 11, 2023",
      time: "11:00am"
    },
    {
      name: "Odunayo and Tobi's Reception",
      date: "Sat Nov 11, 2023",
      time: "11:00am"
    }
  ];
  return (
    <div className="py-10 mx-auto w-11/12">
      <div className="mx-4 lg:mx-auto lg:w-10/12 grid lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-2 rounded-xl text-center lg:px-12 px-8 py-12 space-y-2 flex flex-col justify-center"
          >
            <img src="/images/bell.png" className="self-center" />
            <h3 className="Font-medium text-2xl lg:text-3xl">{event.name}</h3>
            <div>
              <p className="lg:text-lg">{event.date}</p>
              <p>{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
