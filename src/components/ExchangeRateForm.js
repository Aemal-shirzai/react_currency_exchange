const ExchangeRateForm = ({ fxRate, overrideFxRate, setOverrideFxRate }) => {
    return (

        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="input-group mb-sm-3">
                        <span className="input-group-text">Real-time FX-Rate</span>
                        <input type="number" className="form-control" value={fxRate} disabled />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Override FX-Rate</span>
                        <input placeholder="Custom Rate" type="number" className="form-control" value={overrideFxRate} onChange={(e) => setOverrideFxRate(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExchangeRateForm;