import React, { useState } from "react";

export default function TextForm(props) {
  //UpperCase Function
  const onUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };

  //LowerCase Function
  const onLowClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };

  //TitleCase Function
  const intoTitleCase = () => {
    let newText = Text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
    props.showAlert("Converted to Title Case!", "success");
  };

  //Clear Text Function
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  //Copy Text Function
  const copyText = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text Copied!", "success");
  };

  //Remove Extra Space
  const removeSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!", "success");
  };

  //OnChange Method that lets you write in form
  const onChangeClick = (e) => {
    setText(e.target.value);
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.formTitle}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={onChangeClick}
            //If mode is dark background color is black otherwise white and text color will be according to mode
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            value={Text}
            rows="15"
          ></textarea>
        </div>

        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={onUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={onLowClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={intoTitleCase}
        >
          Convert To Title Case
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={removeSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            Text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {Text.length} characters
        </p>
        <p>
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
