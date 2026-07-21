import React from "react";

function FlightDetails() {
    return (
        <div>
            <h2>Available Flights</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI202</td>
                        <td>Bangalore</td>
                        <td>Delhi</td>
                        <td>₹4500</td>
                    </tr>

                    <tr>
                        <td>6E305</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>₹3800</td>
                    </tr>

                    <tr>
                        <td>UK811</td>
                        <td>Hyderabad</td>
                        <td>Kolkata</td>
                        <td>₹5200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FlightDetails;