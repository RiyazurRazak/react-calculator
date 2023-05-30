import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { buttons } from "./data/buttons";

function App() {
  const [value, setValue] = useState("");

  const clickHandller = (targetValue) => {
    if (targetValue === "AC") {
      setValue("");
    } else if (targetValue === "⌫") {
      setValue((prev) => prev.slice(0, -1));
    } else if (targetValue === "=") {
      try {
        const output = eval(value);
        setValue(output);
      } catch (err) {
        setValue("MATH ERROR");
        console.error(err);
      }
    } else {
      setValue((prev) => prev + targetValue);
    }
  };
  return (
    <div className="App">
      <div className="App-header">
        <Screen value={value} />
        <br />
        <div className="panel">
          {buttons.map((value) => (
            <Button key={value} text={value} onClick={clickHandller} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
