import React from 'react';
import Navbar from './Navbar';
import EventPromotion from './EventPromotion';
import VideoSection from './VideoSection';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';
import JoinWhatsAppGroup from './JoinWhatsAppGroup';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <EventPromotion />
        <VideoSection  />
        <RegistrationForm />
        <JoinWhatsAppGroup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
