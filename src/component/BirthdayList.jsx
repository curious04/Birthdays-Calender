import React from 'react';
import './BirthdayList.css';

const BirthdayList = ({ birthdays }) => {
  return (
    <div>
      <h2>Birthdays:</h2>
      <ul>
        {birthdays.map((birthdayText, index) => (
          <li key={index}>{birthdayText}</li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;

