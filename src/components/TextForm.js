import React, {useState} from 'react'

export default function TextForm(props){
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        console.log("Upper Case button was clicked");
        setText(text.toUpperCase());
    }

    const handleDownClick = ()=>{
        console.log("Lower case button was clicked");
        setText(text.toLowerCase());
    }

    const handleClear = () =>{
        console.log('Clear button was clicked');
        setText('');
    }
    const [text, setText] = useState('');

    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}