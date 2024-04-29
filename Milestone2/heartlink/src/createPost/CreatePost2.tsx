import Template1 from "../components/Templates/Template1.tsx";
import "./createPost.css";
import BooksPt2 from "../bookDonationWebpages/BooksPt2.tsx";

function CreatePost() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={<BooksPt2 />}
      rightPanelButtonText={"Post"}
      hasButton={true}
    />
  );
}

export default CreatePost;
