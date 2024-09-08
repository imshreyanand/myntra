'use client';

import React, { useState } from 'react';

const TryOn: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [displayedImage, setDisplayedImage] = useState<string | null>(null);
  const [tryOnImage, setTryOnImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    setDisplayedImage('https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/master/pass/fullsizeoutput_6bcd_1_1080x.jpg');
  };

  const handleTryOn = () => {
    setTimeout(() => {
      setTryOnImage('https://i.pinimg.com/736x/29/33/07/293307f9913245036bfcc5bfac48ad4f.jpg'); // Replace with your local image path
    }, 5000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
      {displayedImage && (
        <div className="space-y-4">
          <img src={displayedImage} alt="Displayed" className="w-full h-auto rounded-lg shadow-md" />
          <button
            onClick={handleTryOn}
            className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Try On
          </button>
        </div>
      )}
      {tryOnImage && (
        <div className="space-y-4">
          <img src={tryOnImage} alt="Try On" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default TryOn;
