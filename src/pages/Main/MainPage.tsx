import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";

const MainPage = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [delimiter, setDelimiter] = useState("");

  const [isParsing, setIsParsing] = useState(false);
  const [gettingCode, setGettingCode] = useState(false);

  const parse = () => {
    setIsParsing(true);

    axios
      .post("http://localhost:3001/api/generate-json", { samples: text })
      .then((res) => {
        setResult(JSON.stringify(res.data, null, 2));

        setIsParsing(false);
      })
      .catch((err) => {
        alert(err);

        setIsParsing(false);
      });
  };

  const getCode = () => {
    setGettingCode(true);
    console.log(JSON.parse(result));

    axios
      .post("http://localhost:3001/api/generate-code", {
        source: text,
        target: result,
        delimiter: delimiter,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setGettingCode(false);
      })
      .catch((err) => {
        alert(err);

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
      <CustomInput
        text={delimiter}
        setText={setDelimiter}
        placeholder="Delimiter"
        disabled={result.length === 0}
        type="text"
      />
      {result.length === 0 ? (
        <CustomButton text="Let's Parse" onClick={parse} disabled={isParsing} />
      ) : (
        <CustomButton
          text="Get the code"
          onClick={getCode}
          disabled={gettingCode}
        />
      )}
    </>
  );
};

export default MainPage;
