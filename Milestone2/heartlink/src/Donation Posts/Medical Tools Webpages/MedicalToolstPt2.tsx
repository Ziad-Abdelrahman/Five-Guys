import Template1 from "../../components/Templates/Template1.tsx";
import "../createPost/createPost.css";

import MedicalSuppliesPt2 from "../../components/MedicalSupplies/MedicalSuppliesPt2.tsx";

function CreatePost() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />3 of 3<h2> Creating your post!</h2>
          <p>One last step.. </p>
        </div>
      }
      rightPanelDiv={<MedicalSuppliesPt2 header={"Medical Tools"} />}
      rightPanelButtonText={"Post"}
      hasButton={true}
    />
  );
}

export default CreatePost;
