import ImageUploader from "../../components/FileUploader/ImageUploader.tsx";
import EditInputBox from "../../components/InputBox/EditInputBox.tsx";
import EditNumberInputBox from "../../components/InputBox/EditNumberInputBox.tsx";
import { useState } from "react";

interface ToysPt2Props {
  toyName: string;
  quantity: string;
}

function EditToysPt2(props: ToysPt2Props) {
  const [toyName, setToyName] = useState(props.toyName);
  const [quantity, setQuantity] = useState(props.quantity);
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
          <EditInputBox
            type={"text"}
            label={"Specify toy"}
            width={"280px"}
            setChecked={setToyName}
            text={toyName}
            hasText={toyName != ""}
          />
        </div>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "3%" }}>
            How many toys do you need?
          </h5>
          <EditNumberInputBox
            label={"Quantity"}
            width={"280px"}
            setChecked={setQuantity}
            hasText={quantity != ""}
            text={quantity}
          />
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

export default EditToysPt2;
