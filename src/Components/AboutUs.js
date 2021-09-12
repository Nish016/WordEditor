import React from "react";

export default function AboutUs(props) {

let myStyle = {
  color: props.mode==="dark"?"white":"#042743",
  backgroundColor:props.mode ==="dark"?"rgb(36 74 104)":"white",
  border: props.mode === 'dark'?'0.1px solid':'',
  borderColor:props.mode === 'dark'?'white':'#DCDCDC'
};

 
  return (
    <div className = "container" style = {myStyle}>
      <h1 className = "my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style = {myStyle}
              
            >
            <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              Word Editor gives you a way to Analyze a your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style = {myStyle}
            >
             <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              Word Editor is a free Text editor tool that provides instant word and character count statistics for a given text.
              It also provides the ability to edit that text using different functions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style = {myStyle}
            >
            <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              This word counter software is Compatible with all browsers such as google chrome, Firefox, Internet Explorer,etc.
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}
