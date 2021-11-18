import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const clearText = () => {
    setText('');
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
  }
  
  return (
      <>
    <div className="container" style={{color:props.mode ==='dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          name=""
          id="myBox"
          className="form-control"
          cols="30"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter text here!"
          style={{backgroundColor:props.mode ==='dark' ? 'gray':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark' ? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters.</p>
        <p>And takes {0.008 *(text.split(" ").length-1)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
