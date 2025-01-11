import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms-conditions" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center mb-4">
          <p className="text-sm">
            This site is not part of Domainhood or Domainhood Inc. Additionally, this site is NOT endorsed by Domainhood in any way.{' '}
            <span className="font-bold">Domainhood</span> is a trademark of{' '}
            <span className="font-bold">Domainhood, Inc.</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://https://web.facebook.com/sams.page.584306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/sammymuigai131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com/@sammymuigai416"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sammy-muigai-1390a0259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm">©2025 Grow&learn. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
