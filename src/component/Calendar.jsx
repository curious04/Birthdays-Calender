import React, { useState } from "react";
import axios from "axios";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import BirthdayList from "./BirthdayList";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './Calender.css';
import FavoriteBirthdays from './FavoriteBirthdays';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [birthdays, setBirthdays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    setIsLoading(true);
    setError(null);
    if (date) {
      setIsLoading(true);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
      try {
        const response = await axios.get(
          `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${formattedDate}`
        );
        const births = response.data?.births || [];
        const birthdayTexts = births.map((birth) => birth.text);
        setBirthdays(birthdayTexts);
      } catch (error) {
        console.error("Error fetching birthdays:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setBirthdays([]);
      setIsLoading(false);
    }
  };
  

  return (
    <div className="calendar-container">
      <LocalizationProvider dateAdapter={AdapterDateFns} className="calendar-wrapper">
      <StaticDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <input {...params} />}
      />
      </LocalizationProvider>
      <div className="birthday-list-wrapper">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BirthdayList birthdays={birthdays} />
      )}
    </div>
    </div>
  );
};

export default CalendarComponent;
