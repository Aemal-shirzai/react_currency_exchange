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
  const [overrideFxRate, setOverrideFxRate] = useState('');
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const updateFxRate = () => setFxRate(prev => prev + randomNumbers(0.5, -0.5))
    const interval = setInterval(updateFxRate, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    exchangeAmount()
  }, [isEuro, overrideFxRate, fxRate])

  useEffect(() => {
    if (overrideFxRate && (Math.abs(overrideFxRate - fxRate) / fxRate) * 100 > 200) {
      setOverrideFxRate('')
    }
  }, [fxRate, overrideFxRate])

  const exchangeAmount = () => {
    const exchangeRate = overrideFxRate || fxRate
    console.log(".>>> euro amount", mainInputRef.current.value)
    console.log(">>>>>> fx rate", exchangeRate, isEuro);
    if (isEuro) {
      setUsdAmount(() => mainInputRef.current.value * exchangeRate)
      setEuroAmount(mainInputRef.current.value)
    } else {
      setEuroAmount(() => mainInputRef.current.value / exchangeRate)
      setUsdAmount(mainInputRef.current.value)
    }
  }

  const handleSwitch = () => {
    setIsEuro(prev => !prev)
  }

  const handleOverride = (e) => {
    setOverrideFxRate(e.target.value)
  }

  const handleFormSumbit = (e) => {
    e.preventDefault();
    setHistory(prevData => [{
      fxRate: overrideFxRate || fxRate,
      overrideFxRate: overrideFxRate !== '',
      amount: isEuro ? `${euroAmount} €` : `${usdAmount} $`,
      convertedAmount: isEuro ? `${usdAmount} $` : `${euroAmount} €`
    }, ...prevData.slice(0, 4)]);
  }



  return (
    <div className="container">

      {/* Rate Part */}
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Realtime EURO/USD FX-Rate</span>
            <input type="number" className="form-control" value={fxRate} disabled />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Override EURO/USD FX-Rate</span>
            <input type="number" className="form-control" value={overrideFxRate} onChange={handleOverride} />
          </div>
        </div>
      </div>


      {/* Exchange form */}

      <form onSubmit={handleFormSumbit}>
        <div className="row">
          <div className="col-sm-5">
            <div className="input-group mb-3">
              <span className="input-group-text">{isEuro ? '€' : '$'}</span>
              <span className="input-group-text">{isEuro ? 'Euro' : 'USD'}</span>
              <input type="number" className="form-control" ref={mainInputRef} value={isEuro ? euroAmount : usdAmount} onChange={exchangeAmount} />
            </div>
          </div>
          <div className="d-flex col-sm-2 justify-content-center align-items-center" id="exchange_icon" onClick={handleSwitch}>
            <img src={exchangeIcon} className="img-fluid" alt="Switch" />
          </div>
          <div className="col-sm-5">
            <div className="input-group mb-3">
              <span className="input-group-text">{!isEuro ? '€' : '$'}</span>
              <span className="input-group-text">{!isEuro ? 'Euro' : 'USD'}</span>
              <input type="number" className="form-control" value={!isEuro ? euroAmount : usdAmount} disabled />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-lg btn-outline-secondary" disabled={euroAmount === 0 || usdAmount === 0 }>Save to History</button>
      </form>


      {history.length > 0 ?

        <>
          <hr />
          {/* History */}
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>FX Rate</th>
                  <th>Override</th>
                  <th>Amount</th>
                  <th>Converted Amount</th>
                </tr>
              </thead>
              <tbody>
                {history.map((data, index) => (
                  <tr key={index}>
                    <td>{data.fxRate}</td>
                    <td>{data.overrideFxRate ? "Yes" : "No"}</td>
                    <td>{data.amount}</td>
                    <td>{data.convertedAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>

        : null}

    </div>
  );
}

export default App;
