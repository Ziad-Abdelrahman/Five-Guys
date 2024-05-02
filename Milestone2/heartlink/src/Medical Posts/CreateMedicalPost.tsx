import Template1 from "../components/Templates/Template1.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import NumberInputBox from "../components/InputBox/NumberInputBox.tsx";
import "../Donation Posts/createPost/createPost.css";

function CreateMedicalPost() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />1 of 2<h2> Creating your post!</h2>
          <p> insert cute medical comment here .. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h2> Medical Post</h2>
          </div>
          <div className="rest-container" style={{ top: "15em" }}>
            <h4> Please provide the patient's full details</h4>
            <p />
            <InputBox type={"text"} label={"Patient name"} width={"280px"} />
            <p />
            <NumberInputBox label={"Patient age"} width={"280px"} />
            <p />
            <NumberInputBox label={"Patient weight (in KG)"} width={"280px"} />
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      hasButton={false}
    />
  );
}

export default CreateMedicalPost;
