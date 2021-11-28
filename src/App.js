import logo from './logo.svg';
import './App.css';
import './MyStyle.css'
import About from './About';

function App() {
  const myName = 'Art dvp'
  const mySalary = 30000
  const mySisterSalary = 10000
  const randomNumber = Math.random()

  return (
    <div>
      <div className='App'>Section A</div>
      <About/>
    </div>
  );
}

export default App;
