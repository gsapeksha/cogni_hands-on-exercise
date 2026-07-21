import React from "react";
import FlightDetails from "./FlightDetails";

function GuestPage() {
    return (
        <div>
            <h1>Welcome Guest</h1>

            <FlightDetails />

            <p>Please login to book tickets.</p>
        </div>
    );
}

export default GuestPage;