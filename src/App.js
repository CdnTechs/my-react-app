import { useState } from "react/cjs/react.development";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

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
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "grey";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      {/* <div className="container my-3">
        <About />
        <TextForm
          showAlert={showAlert}
          heading="Enter the text below to analyze "
          mode={mode}
        />
      </div> */}

      {/* <BrowserRouter>
        <Routes>
      <Route path="/" element={}*/}
            <TextForm 
          showAlert={showAlert}
          heading="Enter the text below to analyze "
          mode={mode}/>
          {/* <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
