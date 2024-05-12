import { ChangeEventHandler } from "react";
import ImageUploader from "../FileUploader/ImageUploader.tsx";

interface medicalSuppliesProps {
  header: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  err?: string;
  onImage?: (x: boolean) => void;
  upload?: boolean;
}
function MedicalSuppliesPt2({
  header,
  onChange,
  err,
  onImage,
  upload,
}: medicalSuppliesProps) {
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
            Please upload the {header.toLowerCase()}'s photo
          </h4>
          <ImageUploader handleUpload={onImage} upload={upload} />
        </div>
        <div className="mb-3" style={{ width: "600px" }}>
          <h5 style={{ marginTop: "10%" }}>
            Please write the use of the specified {header.toLowerCase()}
          </h5>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={9}
            style={{ height: "150px", borderColor: "#01A95D" }}
            onChange={onChange}
          ></textarea>
          {err && (
            <div style={{ color: "red", marginTop: "0.5rem" }}>{err}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MedicalSuppliesPt2;
