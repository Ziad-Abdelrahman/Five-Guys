import Template1 from "../components/Templates/Template1.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import NumberInputBox from "../components/InputBox/NumberInputBox.tsx";
import "../Donation Posts/createPost/createPost.css";
import { ChangeEvent, useState } from "react";
import Createcomp from "../components/View Request Popup/Createcomp.tsx";

function CreateTeachingPost() {
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [count, setCount] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleCountChange = (num: string) => {
    setCount(num);
  };
  const handleClick = () => {
    if (text.trim() === "" || count.trim() === "") {
      setError("Please provide all the required information.");
      return false;
    }
    setError("");
    setSuccess(true);
    console.log("Form submitted successfully!");
    return true;
  };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <h2> Creating your post!</h2>
          <p> insert cute teaching comment here .. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Created!"} show={success} />
          <div className="header-container" style={{ top: "7.2em" }}>
            <h2> Teaching Post</h2>
          </div>
          <div className="rest-container" style={{ top: "16em" }}>
            <h4> What subject do you need help in?</h4>
            <p />
            <InputBox
              type={"text"}
              label={"Subject"}
              width={"280px"}
              onChange={handleChange}
            />
            <br />
            <h4> How many students are there in a class?</h4>
            <p />
            <NumberInputBox
              label={"Number of students"}
              width={"280px"}
              handleChange={handleCountChange}
            />
            {error && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
            )}
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={false}
      forwardPath={"../"}
      handleClick={handleClick}
    />
  );
}

export default CreateTeachingPost;
