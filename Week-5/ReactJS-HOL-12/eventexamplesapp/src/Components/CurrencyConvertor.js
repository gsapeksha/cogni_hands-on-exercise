import React, { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");

    const convert = () => {

        const euro = (rupees / 90).toFixed(2);

        alert(`Euro : € ${euro}`);
    };

    return (
        <div>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <button onClick={convert}>
                Convert
            </button>

        </div>
    );
}

export default CurrencyConvertor;