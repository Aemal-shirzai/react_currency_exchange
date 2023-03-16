import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [eurAmount, setEurAmount] = useState(0);
  const [usdAmount, setUsdAmount] = useState(0);
  const [isEur, setIsEur] = useState(true);
  const [fxRate, setFxRate] = useState(1.1);
  const [overrideRate, setOverrideRate] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFxRate(prevFxRate => {
        const randomValue = (Math.random() * (0.1)) - 0.05;
        return prevFxRate + randomValue;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (overrideRate && Math.abs(overrideRate - fxRate) / fxRate > 0.02) {
      setOverrideRate(null);
    }
  }, [fxRate, overrideRate]);

  const handleEurInputChange = (e) => {
    setEurAmount(e.target.value);
    setUsdAmount(e.target.value * fxRate);
  };

  const handleUsdInputChange = (e) => {
    setUsdAmount(e.target.value);
    setEurAmount(e.target.value / fxRate);
  };

  const handleSwitchToggle = () => {
    setIsEur(prevIsEur => !prevIsEur);
    setEurAmount(usdAmount);
    setUsdAmount(eurAmount);
  };

  const handleOverrideInputChange = (e) => {
    setOverrideRate(e.target.value);
  };

  const handleOverrideClear = () => {
    setOverrideRate(null);
  };

  const handleConvertClick = (e) => {
    e.preventDefault();
    const historicalEntry = {
      fxRate: overrideRate || fxRate,
      overrideRate: overrideRate !== null,
      amount: isEur ? `${eurAmount} EUR` : `${usdAmount} USD`,
      convertedAmount: isEur ? `${usdAmount} USD` : `${eurAmount} EUR`
    };
    setHistoricalData(prevData => [historicalEntry, ...prevData.slice(0, 4)]);
  };



  return (
    <div className="App">

      <div>
        <form onSubmit={handleConvertClick}>
          <label>
            {isEur ? 'EUR' : 'USD'} Amount:
            <input type="number" value={isEur ? eurAmount : usdAmount} onChange={isEur ? handleEurInputChange : handleUsdInputChange} />
          </label>
          <button type="submit">Convert</button>
          <button type="button" onClick={handleSwitchToggle}>Switch to {isEur ? 'USD' : 'EUR'}</button>
          <label>
            Override FX Rate:
            <input type="number" value={overrideRate || ''} onChange={handleOverrideInputChange} />
            {overrideRate && <button type="button" onClick={handleOverrideClear}>Clear Override</button>}
          </label>
          { usdAmount } --- { eurAmount }
        </form>
        <h3>Current FX Rate: {fxRate.toFixed(2)}</h3>
        <table>
          <thead>
            <tr>
              <th>FX Rate</th>
              <th>Override</th>
              <th>Amount</th>
              <th>Converted Amount</th>
            </tr>
          </thead>
          <tbody>
  {historicalData.map((entry, index) => (
    <tr key={index}>
      <td>{entry.fxRate.toFixed(4)}</td>
      <td>{entry.overrideRate ? "Yes" : "No"}</td>
      <td>{entry.amount}</td>
      <td>{entry.convertedAmount}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  
  )

}

export default App;
