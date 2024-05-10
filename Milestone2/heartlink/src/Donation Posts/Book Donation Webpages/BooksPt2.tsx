import { ChangeEvent, useState } from "react";
import ImageUploader from "../../components/FileUploader/ImageUploader.tsx";
import Template1 from "../../components/Templates/Template1.tsx";

function BooksPt2() {
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") {
      setError("Please provide all the required information.");
      return false;
    }
    setError("");
    console.log("Form submitted successfully!");
    return true;
  };

  let shift = { top: "10em" };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <div className="bloodDonation-container">
          <div className="header-container">
            <h1>Book Donation</h1>
          </div>
          <div className="rest-container" style={shift}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "600px",
              }}
            >
              <h5 style={{ position: "relative", marginTop: "10%" }}>
                {" "}
                Please upload the book's photo
              </h5>
              <ImageUploader />
            </div>
            <div className="mb-3" style={{ width: "600px" }}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Write a summary for the book
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={9}
                style={{ height: "270px", borderColor: "#01A95D" }}
                onChange={handleChange}
              ></textarea>
              {error && (
                <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
              )}
            </div>
          </div>
        </div>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../1"}
      handleClick={handleClick}
    />
  );
}

export default BooksPt2;
