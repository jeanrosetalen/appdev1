import { useState } from "react";

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false)



    return (
        <>
            <h2>{ isOn ? 'The button is ON' : 'The button is OFF'}</h2>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </>
    )
};

export default ToggleButton
