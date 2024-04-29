import LeftPanel from "./LeftPanel.tsx";
import RightPanel from "./RightPanel.tsx";
import "./createPost.css";
import Food from "./Food.tsx";
function CreatePost() {
  return (
    <div className="main">
      <LeftPanel>
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      </LeftPanel>
      <RightPanel text={"Post"}>
        <Food />
      </RightPanel>
    </div>
  );
}

export default CreatePost;
