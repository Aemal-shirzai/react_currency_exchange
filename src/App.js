import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { randomNumbers } from './helpers';

function App() {
  const [fxRate, setFxRate] = useState(() => 1.1)

  useEffect(() => {

    const updateFxRate = () => {
      setFxRate(prev => prev - randomNumbers(0.5, -0.5))
    } 

    const interval = setInterval(updateFxRate, 3000);

    return () => {
      clearInterval(interval);
    }

  }, []);



  return (
    <div className="container">
        { fxRate }
    </div>
  );
}

export default App;
