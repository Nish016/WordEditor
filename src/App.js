import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm.js";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Setting the Dark and Light mode
  const [alert, setAlert] = useState(null); //Alert State

  //Objects for alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    //Alert Duration
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //Function to set Dark and Light Mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} text={"Enable Dark Mode"} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>

            <Route exact path="/about">
              <AboutUs mode = {mode}/>
            </Route>

            <Route exact path="/">
              <TextForm
                formTitle="Enter The Text Here" mode={mode} showAlert={showAlert}/>
            </Route>
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
