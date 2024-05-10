import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
import "./createPost.css";
function CreatePost() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const categories = [
    "Blood donations",
    "Clothes",
    "Food",
    "School supplies",
    "Medical supplies",
    "Toys",
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedType("");
    setSelectedCategory(category);
    if (category === "Blood donations") {
      setSelectedPath("BloodDonation");
    } else if (category === "Clothes") {
      setSelectedPath("Clothes/1");
    } else if (category === "Food") {
      setSelectedPath("Food");
    } else setSelectedPath("Toys/1");
  };
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    if (selectedCategory === "School supplies") {
      if (type === "Books") setSelectedPath("Books/1");
      else setSelectedPath("Stationary");
    } else if (selectedCategory === "Medical supplies") {
      if (type === "Medical tools") setSelectedPath("MedicalTools/1");
      else if (type === "Medical equipment")
        setSelectedPath("MedicalEquipment/1");
      else setSelectedPath(selectedType + "/1");
    }
  };

  const handleNextButton = () => {
    if (
      selectedCategory === "" ||
      ((selectedCategory === "School supplies" ||
        selectedCategory === "Medical supplies") &&
        selectedType === "")
    ) {
      console.log(selectedType);
      setErrorMessage("Please select a category and type");
      return false;
    }
    setErrorMessage("");
    console.log("Form submitted successfully!");
    return true;
  };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <br />
          <h2> Creating your post!</h2>
          <p> Only few steps ahead .. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h1>Donation Posts</h1>
          </div>
          <div className="rest-container" style={{ bottom: "4em" }}>
            <form className="form-container">
              <h2> What kind of items do you need?</h2>
              <label className="createPost-label">
                Please choose a category of the item you request
              </label>
              <DropDown
                options={categories}
                selected={"Specify category"}
                width={"270px"}
                onChange={handleCategoryChange}
              />
            </form>
            {selectedCategory === "School supplies" && (
              <div>
                <br />
                <h4>Do you need books or stationary?</h4>
                <form className="radioButtons-form" method="get">
                  <RadioButton
                    text={"Books"}
                    handleFilterChange={handleTypeChange}
                  />
                  <RadioButton
                    text={"Stationary"}
                    handleFilterChange={handleTypeChange}
                  />
                </form>
              </div>
            )}
            {selectedCategory === "Medical supplies" && (
              <>
                <br />
                <h4>What kind of medical stuff do you need?</h4>
                <DropDown
                  options={[
                    "Medications",
                    "Medical equipment",
                    "Medical tools",
                  ]}
                  selected={"Specify category"}
                  width={"280px"}
                  onChange={handleTypeChange}
                />
              </>
            )}
            {errorMessage && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {errorMessage}
              </div>
            )}
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      handleClick={handleNextButton}
      forwardPath={selectedPath}
    />
  );
}

export default CreatePost;