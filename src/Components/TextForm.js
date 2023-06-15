import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    } 
    const handleOnChamge = (event) => {
        // console.log("On Change"); 
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChamge} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear all Text</button>

            </div>
            <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>Reading time {0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
