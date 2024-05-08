import Template1 from "../components/Templates/Template1.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import NumberInputBox from "../components/InputBox/NumberInputBox.tsx";
import "../Donation Posts/createPost/createPost.css";

function CreateTeachingPost() {
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
          <div className="header-container" style={{ top: "7.2em" }}>
            <h2> Teaching Post</h2>
          </div>
          <div className="rest-container" style={{ top: "16em" }}>
            <h4> What subject do you need help in?</h4>
            <p />
            <InputBox type={"text"} label={"Subject"} width={"280px"} />
            <br />
            <h4> How many students are there in a class?</h4>
            <p />
            <NumberInputBox label={"Number of students"} width={"280px"} />
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={false}
      forwardPath={"../"}
    />
  );
}

export default CreateTeachingPost;
