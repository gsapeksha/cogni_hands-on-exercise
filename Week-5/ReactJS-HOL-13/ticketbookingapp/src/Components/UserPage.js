import React from "react";
import FlightDetails from "./FlightDetails";
import TicketBooking from "./TicketBooking";

function UserPage() {
    return (
        <div>
            <h1>Welcome User</h1>

            <FlightDetails />

            <TicketBooking />
        </div>
    );
}

export default UserPage;