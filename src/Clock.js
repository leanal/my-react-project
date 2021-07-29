import React from "react";

function Clock({loggedIn}) {
    if (loggedIn) {
        const d = new Date();
        const h = d.getHours()
        if (h < 12) {
            return <p>Good Morning!</p>;
        } else if (h > 11 && h <  19) {
            return <p>Good Afternoon!</p>;
        } else if (h > 18) {
            return <p>Good Evening!</p>;
        }
    }
    return null;
}

export default Clock;
