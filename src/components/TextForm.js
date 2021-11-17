import React, {useState} from 'react'

export default function TextForm(props){
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
        
    }

    const handleUpClick = ()=>{
        console.log("Upper Case button was clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleDownClick = ()=>{
        console.log("Lower case button was clicked");
        setText(text.toLowerCase());
        props.showAlert("Coverted to LowerCase", "success");
    }

    const handleClear = () =>{
        console.log('Clear button was clicked');
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = ()=>{
        console.log("Copy button was clicked");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('');

    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>Your text has {text.split(/[ ] + /).filter((a1)=>{return a1.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above"}</p>
        </div>
        </>
    )
}