import React from "react";

function Welcome() {

    function welcome(message) {
        alert(message);
    }

    return (
        <div>
            <button onClick={() => welcome("Welcome")}>
                Say Welcome
            </button>
        </div>
    );
}

export default Welcome;