import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";

const MainPage = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isParsing, setIsParsing] = useState(false);
  const parse = () => {
    setIsParsing(true);

    axios
      .post("http://localhost:3001/api/generate-json", { samples: text })
      .then((res) => {
        console.log(res);

        setIsParsing(false);
      });
  };
  return (
    <>
      <CustomInput
        text={text}
        setText={setText}
        placeholder="Put Non-structured text"
        type="multiple"
        disabled={false}
      />

      <CustomInput
        text={result}
        setText={setResult}
        placeholder="Expected Result..."
        type="multiple"
        disabled={true}
      />
      <CustomButton text="Let's Parse" onClick={parse} disabled={isParsing} />
    </>
  );
};

export default MainPage;
