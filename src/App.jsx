import './App.css';
import Calendar from './component/Calendar';
import FavoriteBirthdays from './component/FavoriteBirthdays';

function App() {
  return (
    <div className='App'>
      <h1 className='header-text'>Calendar </h1>
      <Calendar />
      <FavoriteBirthdays />
    </div>
  );
}

export default App;
