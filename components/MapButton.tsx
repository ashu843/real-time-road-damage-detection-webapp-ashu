// MapButton.tsx
import React from 'react';

const MapButton: React.FC = () => {
  return (
    <a href="/mp.html" target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Map
      </button>
    </a>
  );
};

export default MapButton;


