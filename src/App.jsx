import './App.css';
import Calendar from './component/Calendar';
import FavoriteBirthdays from './component/FavoriteBirthdays';

function App() {
  return (
    <div className='App'>
      <h1 className='header-text'> Birthday Calendar </h1>
      <Calendar />
    </div>
  );
}

export default App;
