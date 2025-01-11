import React, { useState } from 'react';
import './index.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  console.log('Modal is open:', isOpen);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-md max-w-sm text-center">
        <h2 className="text-lg font-bold mb-2">Important Notification</h2>
        <p className="mb-4">
          Beware of fraudulent contacts. For secure communication, please contact us only through our official email.
        </p>
        <p className="mb-4">
          <a 
            href="mailto:theonechoice@gmail.com" 
            className="text-blue-500 underline hover:text-blue-700"
          >
            theonechoice@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Remember, we will never ask for sensitive information like passwords or payment details via any email other than our official one.
        </p>
        <button 
          onClick={() => {
            console.log('Close button clicked');
            onClose();
          }} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
      
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">The-One-Choice</div>
          <button onClick={toggleMenu} className="text-white md:hidden">
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <ul className={`flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <li><a href="#events" className="text-gray-300 hover:text-white">Events</a></li>
            <li><a href="#register" className="text-gray-300 hover:text-white">Register</a></li>
            <li><button onClick={handleContactClick} className="text-gray-300 hover:text-white">Contact</button></li>
          </ul>
        </div>
      </nav>

      <Modal isOpen={modalOpen} onClose={closeModal} />

      {/* Introduction Section */}
      <section className="bg-white p-4 sm:p-6 md:p-8 mt-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Welcome to The-One-Choice</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
            Discover the ultimate experience with us. Learn more about our events and how you can be part of them.
          </p>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => console.log('Reserve Spot button clicked')}
          >
            Reserve Your Spot by filling in your details
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
