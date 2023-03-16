import exchangeIcon from '../assets/exchange.png';

const ExchangeForm = ({ handleFormSumbit, mainInputRef, isEuro, euroAmount, usdAmount, exchangeAmount, handleSwitch }) => {

    return (

        <form onSubmit={handleFormSumbit}>
            <div className="row">
                <div className="col-sm-5">
                    <div className="input-group mb-sm-3">
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
            <button type="submit" className="btn btn-lg btn-outline-secondary" disabled={euroAmount === 0 || usdAmount === 0}>Save to History</button>
        </form>

    );

}

export default ExchangeForm;