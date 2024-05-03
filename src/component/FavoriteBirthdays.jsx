import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const FavoriteBirthdays = ({ birthdayText }) => {
  const [isStarFilled, setIsStarFilled] = useState(false);

  const toggleStarFill = () => {
    setIsStarFilled(prevState => !prevState);
  };

  const addToFavorites = () => {
    
    const existingFavorites = JSON.parse(localStorage.getItem('favoriteBirthdays')) || [];

    if (existingFavorites.includes(birthdayText)) {
      alert(`${birthdayText} is already in favorites!`);
      return; 
    }

    const updatedFavorites = [...existingFavorites, birthdayText];

    localStorage.setItem('favoriteBirthdays', JSON.stringify(updatedFavorites));

    const favoriteBirthdayNode = document.createElement('li');
    favoriteBirthdayNode.textContent = birthdayText;
    document.querySelector('.favouriteBirthday ul').appendChild(favoriteBirthdayNode);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
      <StarIcon 
        onClick={() => {
          toggleStarFill();
          addToFavorites();
        }}
        style={{ color: isStarFilled ? 'yellow' : 'inherit', cursor: 'pointer' }}
      />
      <span style={{ marginLeft: '0.5rem' }}>{birthdayText}</span>
    </div>
  );
};

export default FavoriteBirthdays;
