import React, { useState } from "react";

export default function TextForm(props) {
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase", "success");
    }

    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase", "success");
    }

    function handleCopyText() {
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.showAlert(" Copied to Clipboard!", "success");
    }

    function handleClearText() {
        let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared", "success");
    }

    function handleOnSpeak() {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        setIsSpeaking(true);
        props.showAlert(" Speaking Start", "success");
    }

    function handleOnStop() {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [text, setText] = useState("");
    // text = "New Text" // Wrong way to change the state
    // setText("New Text") // Correct way to change the state
    return (
        <>
            <div className="container" style = {{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        value={text}
                        onChange={handleOnChange}
                        className="form-control" style = {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button disabled = {text.length ===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled = {text.length ===0} className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled = {text.length ===0} className="btn btn-primary my-2 mx-1" onClick={handleClearText}>
                    Clear Text
                </button>
                <button disabled = {text.length ===0} className="btn btn-outline-danger my-2 mx-1" onClick={handleCopyText}>
                    Copy to Clipboard
                </button>

                {/* <button className="btn btn-success my-2 mx-1" onClick={handleOnSpeak}>
                    Text to Speech <img src="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Volume-512.png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
                </button>
                <button className="btn btn-danger my-2 mx-1" onClick={handleOnStop}>
                    Stop <img src="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Mute-128.png" alt="logo" height = "25" width = "25" className="d-inline-block align-text-top" />
                </button> */}

                <button disabled = {text.length ===0}
                    className="btn btn-success my-2 mx-1"
                    onClick={isSpeaking ? handleOnStop : handleOnSpeak}
                >
                    {isSpeaking ? "Stop" : "Text to Speech"}
                </button>
            </div>
            <div className="container my-2" style = {{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters
                </p>
                <p>{0.003 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read</p>
                {/* <h3>Preview</h3> */
                /* <p>{text.length>0?text:"Enter Something in the Text Box to preview it here."}</p> */}
            </div>
        </>
    );
}
