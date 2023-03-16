const History = ({ history }) => {
    return (
        <>
            <hr />
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
    );
}

export default History;