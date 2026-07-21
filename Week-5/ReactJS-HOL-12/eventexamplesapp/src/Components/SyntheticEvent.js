import React from "react";

function SyntheticEvent() {

    function handleClick() {
        alert("I was clicked");
    }

    return (
        <button onClick={handleClick}>
            OnPress
        </button>
    );
}

export default SyntheticEvent;