import ImageUploader from "../../components/FileUploader/ImageUploader.tsx";
import Template1 from "../../components/Templates/Template1.tsx";

function BooksPt2() {
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
        <>
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
              ></textarea>
            </div>
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../1"}
    />
  );
}

export default BooksPt2;
