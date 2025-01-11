import React, { useState } from "react";

const EventPromotion = () => {
  const [events] = useState([
    { id: 1, title: "The Introduction", date: "January 11, 2025", description: "This will be an introduction to the One thing." },
    { id: 2, title: "The Strategy", date: "January 14, 2025", description: "How will I be consistent?" },
    { id: 3, title: "The Growth", date: "January 16, 2025", description: "I have set everything up. It's time for 'GROWTH!'." },
  ]);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const reserveSpot = (eventId) => {
    setNotificationMessage(`You have reserved a spot for Event ID: ${eventId}. An email will be sent to you if you have subscribed.`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

  const isPastDate = (date) => new Date(date) < new Date();

  return (
    <section id="events" className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold mb-12">Welcome to Our Events</h2>

        {/* Introduction Event */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl mb-12">
          <h3 className="text-3xl font-bold mb-4">The Introduction</h3>
          <p className="text-lg mb-6">Join us for an exciting introduction to our events. This session will cover the foundations of what lies ahead.</p>
          <button
            className={`px-8 py-3 rounded-full font-semibold transition ${
              isPastDate("January 11, 2025")
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={isPastDate("January 11, 2025")}
          >
            {isPastDate("January 11, 2025") ? "Not Available" : "On Going"}
          </button>
        </div>

        {/* Upcoming Events */}
        <h2 className="text-4xl font-bold mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter((event) => event.title !== "The Introduction")
            .map((event) => (
              <div key={event.id} className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-500 mb-4">{event.date}</p>
                <p className="mb-6">{event.description}</p>
                {event.title === "The Strategy" && (
                  <p className="text-gray-600 italic mb-6">
                    Recommended: Learn top strategies to stay consistent and build sustainable success in your journey.
                  </p>
                )}
                {event.title === "The Growth" && (
                  <p className="text-gray-600 italic mb-6">
                    Recommended: Explore methods to scale effectively and achieve significant growth in this phase.
                  </p>
                )}
                <button
                  onClick={() => reserveSpot(event.id)}
                  className="px-6 py-2 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition"
                >
                  Reserve Spot
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Custom Notification */}
      {showNotification && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
          {notificationMessage}
        </div>
      )}
    </section>
  );
};

export default EventPromotion;
