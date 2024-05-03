

import React, { useState } from 'react';

const FavoriteBirthdays = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (birthday) => {
    setFavorites((prevFavorites) => [...prevFavorites, birthday]);
  };

  return (
    <div>
      <h2>Favorite Birthdays:</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
      <h3>Add to Favorites:</h3>
      <button onClick={() => addToFavorites('Birthday to add')}>
        Add Birthday to Favorites
      </button>
    </div>
  );
};

export default FavoriteBirthdays;
