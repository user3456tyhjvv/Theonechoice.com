import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';


const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!email || !name || !phone) {
      setError('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-4 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800">Thank you for subscribing!</h2>
        <p className="mt-2 text-green-600">We've sent your information to theonething416@gmail.com</p>
      </div>
    );
  }

  return (
    <div id="register" className="min-h-screen bg-black flex flex-col justify-center items-center p-6">
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white p-10 rounded-lg shadow-lg w-full max-w-md">
        {!showForm ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Register Below to Save Your FREE Spot.</h2>
            <p className="mb-6">Join our private WhatsApp group for exclusive updates!</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md w-full transition duration-300"
            >
              CLICK HERE TO RESERVE YOUR SPOT
            </button>
            <p className="text-center mt-4">You’ll get the confirmation in your email address.</p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
  {error && <div className="text-red-500 text-sm font-medium">{error}</div>}

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
      Your Best Email
    </label>
    <input
      id="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      placeholder="your@email.com"
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-black"
    />
  </div>

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
      Preferred Name
    </label>
    <input
      id="name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      placeholder="Your Name"
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-black"
    />
  </div>

  
  <div>
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
      Phone Number
    </label>
    <PhoneInput
      international
      countryCallingCodeEditable={false}
      
      value={phone}
      onChange={(value) => setPhone(value)}
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-black"
    />
    <style>
      {`
        .PhoneInput {
          width: 100%;
        }
        .PhoneInput input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          color: black;
        }
        .PhoneInput .PhoneInputCountry {
          height: auto;
        }
        .PhoneInput .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1rem;
        }
      `}
    </style>
  </div>

  <button
    type="submit"
    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50"
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Submitting...' : 'Subscribe'}
  </button>
</form>

        
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
