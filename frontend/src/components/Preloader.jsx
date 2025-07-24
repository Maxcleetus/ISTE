import React from 'react';
import logo1 from '../assets/logo1.jpeg';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-300">
      <img className="w-56 md:w-60 rounded-lg shadow-gray-900 shadow-2xl" src={logo1} alt="Logo" />
      <div className="w-56 h-2 mt-6 bg-black/20 overflow-hidden rounded-full">
        <div className="loading-bar h-full bg-black animate-loading" />
      </div>
    </div>
  );
};

export default Preloader;

