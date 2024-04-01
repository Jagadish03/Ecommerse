import logo from './logo.svg';
import './App.css';
import Navigation from './customer/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <>
    <div className="">
      <Navigation/>
    </div>
    <HomePage/>
    </>
  );
}

export default App;
