import ImageUploader from "../../components/FileUploader/ImageUploader.tsx";
import InputBox from "../../components/InputBox/InputBox.tsx";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
function ToysPt2() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "600px",
  };
  return (
    <>
      <div className="header-container">
        <h1>Toys</h1>
      </div>
      <div className="rest-container" style={{ top: "13em" }}>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "3%" }}>
            What is the toy's name?
          </h5>
          <InputBox type={"text"} label={"Specify toy"} width={"280px"} />
        </div>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "3%" }}>
            How many toys do you need?
          </h5>
          <NumberInputBox label={"Quantity"} width={"280px"} />
        </div>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "13%" }}>
            {" "}
            Please upload the toy's photo
          </h5>
          <ImageUploader width={"280px"} height={"180px"} />
        </div>
      </div>
    </>
  );
}

export default ToysPt2;
