import './App.css';
import exchangeIcon from './assets/exchange.png';
import { useEffect, useRef, useState } from 'react';
import { randomNumbers } from './helpers';


function App() {
  const mainInputRef = useRef(null)
  const [fxRate, setFxRate] = useState(() => 1.1)
  const [usdAmount, setUsdAmount] = useState(0)
  const [euroAmount, setEuroAmount] = useState(0)
  const [isEuro, setIsEuro] = useState(true)
  

  useEffect(() => {
    const updateFxRate = () => setFxRate(prev => prev + randomNumbers(0.5, -0.5))
    const interval = setInterval(updateFxRate, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    exchangeAmount()
  }, [isEuro])

  const exchangeAmount = () => {
    console.log(".>>> euro amount", mainInputRef.current.value)
    console.log(">>>>>> fx rate", fxRate, isEuro);
    if (isEuro) {
      setUsdAmount(() => mainInputRef.current.value * fxRate)
      setEuroAmount(mainInputRef.current.value)
    } else {
      setEuroAmount(() => mainInputRef.current.value / fxRate)
      setUsdAmount(mainInputRef.current.value)
    }
  }

  const handleSwitch = () => {
    setIsEuro(prev => !prev)
  }



  return (
    <div className="container">
      <h3>Current FX Rate: {fxRate}</h3>

      <div>
        <form>
          <div className="row">
            <div className="col-sm-5">
              <div className="input-group mb-3">
                <span className="input-group-text">{isEuro ? '€' : '$'}</span>
                <span className="input-group-text">{isEuro ? 'Euro' : 'USD'}</span>
                <input type="number" className="form-control" ref={mainInputRef} value={isEuro ? euroAmount : usdAmount} onChange={exchangeAmount}/>
              </div>
            </div>
            <div className="d-flex col-sm-2 justify-content-center align-items-center" id="exchange_icon" onClick={handleSwitch}>
              <img src={exchangeIcon} className="img-fluid"/>
            </div>
            <div className="col-sm-5">
              <div className="input-group mb-3">
                <span className="input-group-text">{!isEuro ? '€' : '$'}</span>
                <span className="input-group-text">{!isEuro ? 'Euro' : 'USD'}</span>
                <input type="number" className="form-control" value={!isEuro ? euroAmount : usdAmount} disabled/>
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
