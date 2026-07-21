import React, { useState } from "react";
import "./App.css";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>

            <h1>Ticket Booking Application</h1>

            <button onClick={() => setLoggedIn(true)}>
                Login
            </button>

            <button
                onClick={() => setLoggedIn(false)}
                style={{ marginLeft: "10px" }}
            >
                Logout
            </button>

            <hr />

            {loggedIn ? <UserPage /> : <GuestPage />}

        </div>
    );
}

export default App;