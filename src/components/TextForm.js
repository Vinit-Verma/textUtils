import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted into Uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted into Lowercase!", "success");
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // alert("Text copied to clipboard!");
    // let newText = text.toLowerCase();
    // setText(newText);
    props.showAlert("Text is copied to clipboard!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here.");
  //   text = "new text"; //Wrong way to change the state.
  //   setText = "new text"; //Correct way to change the state.
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              background: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-success my-2" onClick={handleCopyClick}>
          Copy to clipboard
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClrClick}>
          Clear
        </button>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it"}
        </p>
      </div>
    </>
  );
}
