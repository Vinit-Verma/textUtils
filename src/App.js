import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> */}

      <Alert alert={alert} />

      <div className="container my-2">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse."
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
