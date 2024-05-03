import React, { useState } from 'react';
import '../Styles/BirthdayList.css';
import './FavoriteBirthdays';
import FavoriteBirthdays from './FavoriteBirthdays';

const BirthdayList = ({ birthdays }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBirthdays = birthdays.filter(birthday =>
    birthday.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='birthdayList'>
      <h2>Birthdays:</h2>
      <input
        type="text"
        placeholder="Search birthdays..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className='birthday-list'>
        {filteredBirthdays.map((birthdayText, index) => (
          <FavoriteBirthdays key={index} birthdayText={birthdayText} />
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
