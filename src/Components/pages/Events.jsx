import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Events = () => {
  const { searchTerm } = useOutletContext();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Event</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((event, i) => (
              <tr key={event.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {event.title}
                </td>
                <td className="p-3">{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
