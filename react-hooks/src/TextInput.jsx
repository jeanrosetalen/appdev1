import { useState } from "react"

const TextInput = () => {

    const[inputValue, setInputValue] = useState('')

    return (
        <>
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>You typed: {inputValue}</h1>
        </>
    )
}

export default TextInput