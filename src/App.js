import './App.css';
import { useEffect, useRef, useState } from 'react';
import { randomNumbers } from './helpers';
import ExchangeForm from './components/ExchangeForm';
import ExchangeRateForm from './components/ExchangeRateForm';
import History from './components/History';


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
      <ExchangeRateForm
        fxRate={fxRate}
        overrideFxRate={overrideFxRate}
        setOverrideFxRate={setOverrideFxRate}
      />


      {/* Exchange form */}
      <ExchangeForm
        handleFormSumbit={handleFormSumbit}
        mainInputRef={mainInputRef}
        isEuro={isEuro}
        euroAmount={euroAmount}
        usdAmount={usdAmount}
        exchangeAmount={exchangeAmount}
        handleSwitch={handleSwitch}
      />


      {/* History Part */}
      {history.length > 0 ? <History history={history} /> : null}

    </div>
  );
}

export default App;
