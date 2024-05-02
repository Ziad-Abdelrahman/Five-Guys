import ImageUploader from "../FileUploader/ImageUploader.tsx";

interface medicalSuppliesProps {
  header: string;
}
function MedicalSuppliesPt2({ header }: medicalSuppliesProps) {
  let shift = { top: "12em" };
  return (
    <>
      <div className="header-container">
        <h1>{header}</h1>
      </div>
      <div className="rest-container" style={shift}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <h4 style={{ position: "relative", marginTop: "7%" }}>
            {" "}
            Please upload the {header.toLowerCase()}'s photo
          </h4>
          <ImageUploader />
        </div>
        <div className="mb-3" style={{ width: "600px" }}>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
            style={{ marginTop: "7%" }}
          >
            Please write the use of the specified {header.toLowerCase()}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={9}
            style={{ height: "150px", borderColor: "#01A95D" }}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default MedicalSuppliesPt2;
