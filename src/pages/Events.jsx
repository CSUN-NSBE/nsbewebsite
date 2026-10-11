import { useState } from "react";
import { events } from "../data/events";

const categories = ["All Events", "Professional Development", "Social", "Academic Support"];

function Events() {
  const [activeCategory, setActiveCategory] = useState("All Events");

  const filteredEvents =
    activeCategory === "All Events"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <div>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold">Upcoming Events</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 hover:border-maroon hover:text-maroon transition-colors"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filteredEvents.length === 0 ? (
            <p className="text-gray-500">No events in this category yet — check back soon.</p>
          ) : (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col gap-4 rounded-lg border border-gray-200 p-5 sm:flex-row sm:items-center"
              >
                <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded bg-maroon text-white">
                  <span className="text-xs font-bold uppercase">{event.date.month}</span>
                  <span className="text-xl font-bold">{event.date.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-maroon">{event.title}</h3>
                  <p className="text-sm text-gray-500">
                    {event.time} &bull; {event.location}
                  </p>
                </div>
                <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:self-center">
                  {event.category}
                </span>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Events;