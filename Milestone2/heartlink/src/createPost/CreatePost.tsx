import DropDown from "../components/DropDown/DropDown.tsx";
import LeftPanel from "./LeftPanel.tsx";
import RightPanel from "./RightPanel.tsx";
import "./createPost.css";
function CreatePost() {
  const categories = [
    "Blood donations",
    "Clothes",
    "Food",
    "Health supplies",
    "School supplies",
    "Toys",
  ];
  return (
    <div className="main">
      <LeftPanel>
        <div className="leftText">
          <p /> 1 of 2<h2> Creating your post!</h2>
          <p> Only few steps ahead .. </p>
        </div>
      </LeftPanel>
      <RightPanel text={"Next"}>
        <div className="createPost-div">
          <form className="form-container">
            <h2> What kind of items do you need?</h2>
            <label className="createPost-label">
              Please choose a category of the item you request
            </label>
            <DropDown
              options={categories}
              selected={"Specify category"}
              width={"270px"}
            />
          </form>
        </div>
      </RightPanel>
    </div>
  );
}

export default CreatePost;
