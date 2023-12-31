import React from "react";

function EventDetails() {
  var events = [
    {
      name: "Vow Ceremony",
      date: "Sat Nov 11, 2023",
      time: "12:00pm"
    },
    {
      name: "Reception Ceremony ",
      date: "Sat Nov 11, 2023",
      time: "2:00pm"
    },
    {
      name: "After Party",
      date: "Sat Nov 11, 2023",
      time: "6:00pm"
    }
  ];
  return (
    <div className="py-10 mx-auto w-11/12">
      <div className="mx-4 lg:mx-12 grid md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-2 rounded-xl text-center lg:px-12 px-8 py-12 space-y-2 flex flex-col justify-center"
          >
            <img src="/images/bell.png" className="self-center" />
            <h3 className="text-2xl lg:text-3xl">{event.name}</h3>
            <div>
              <p>{event.date}</p>
              <p>{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
