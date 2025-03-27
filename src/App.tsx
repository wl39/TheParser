// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomInput from "./components/CustomInput/CustomInput";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <CustomButton text="hi" />
      <div>Hello</div>
      <CustomInput text={text} placeholder="test" setText={setText} />
    </>
  );
}

export default App;
