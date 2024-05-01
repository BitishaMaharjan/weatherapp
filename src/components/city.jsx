import React from 'react';

export default function City({ img, newSearch, name }) {
  const handleCityClick = () => {
    newSearch(name);
  };

  return (
    <div className="city-cards flex flex-col cursor-pointer" onClick={handleCityClick}>
      <div className="place">
        <img src={img} alt='city-image' />
      </div>
      <h2>{name}</h2>
    </div>
  );
}