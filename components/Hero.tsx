
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
        The PDF Toolkit You'll Actually <span className="text-red-600">Like</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
        A complete suite of online tools to work with PDF files efficiently. 
        Free, secure, and easy to use for everyone.
      </p>
    </div>
  );
};

export default Hero;
