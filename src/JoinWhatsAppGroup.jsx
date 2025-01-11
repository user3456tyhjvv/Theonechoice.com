import React from "react";
import Footer from "./Footer";

const JoinWhatsAppGroup = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Through<span className="text-yellow-400"> this you</span> you
          secure your spot
        </h1>
        <p className="mt-4 text-gray-300">Here’s what should  do next...</p>
      </div>

      {/* Progress Bar */}
      <div className="w-3/4 lg:w-1/2 bg-gray-700 h-4 rounded-full mb-8 relative">
        <div
          className="bg-yellow-400 h-full rounded-full"
          style={{ width: "100%" }}
        ></div>
        <span className="absolute right-2 top-0 text-xs text-black">100%</span>
      </div>

      {/* WhatsApp Group Section */}
      <div className="bg-gray-800 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Join the WhatsApp Group</h2>
        <p className="text-gray-300 mb-6">
          Join our Private WhatsApp group to download your 2025 Plan of Attack +
          all the free resources that I’ll share throughout the event for each
          episode.
        </p>
        <a
          href="https://chat.whatsapp.com/FWnKIR99gt835V0qH53NO0" // Replace with your actual WhatsApp group invite link
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Ensures security when opening links in a new tab
          className="block bg-green-500 text-center text-white font-semibold py-3 rounded-md hover:bg-green-600 transition"
        >
          JOIN THE WHATSAPP GROUP
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Don’t have WhatsApp? Download it. It will be essential to our
          communication here.
        </p>
      </div>

      
      
    </div>
  );
};

export default JoinWhatsAppGroup;
