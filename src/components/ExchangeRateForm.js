const ExchangeRateForm = ({ fxRate, overrideFxRate, setOverrideFxRate }) => {
    return (

        <>
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
                        <input type="number" className="form-control" value={overrideFxRate} onChange={(e) => setOverrideFxRate(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExchangeRateForm;