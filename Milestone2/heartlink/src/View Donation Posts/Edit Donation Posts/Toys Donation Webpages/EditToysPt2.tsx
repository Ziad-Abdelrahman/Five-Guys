import { ChangeEvent, useState } from "react";
import EditInputBox from "../../../components/InputBox/EditInputBox.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import ImageUploader from "../../../components/FileUploader/ImageUploader.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
import Createcomp from "../../../components/View Request Popup/Createcomp.tsx";

interface ToysPt2Props {
  id: string;
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
  const [error, setError] = useState("");

  const [toy, setToy] = useState("");
  const [success, setSuccess] = useState(false);
  const [img, setImg] = useState("");

  const handlleQuantityChange = (num: string) => {
    setQuantity(num);
  };
  const handleImage = (x: boolean) => {
    if (x) setImg("Image Uploaded");
    else setImg("");
  };
  const handleClick = () => {
    if (toy.trim() === "" || quantity.trim() === "" || img.trim() === "") {
      setError("Please enter the toy name and the quantity");
      return false;
    }
    setSuccess(true);
    setError("");
    console.log("Form submitted successfully!");
    return true;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToy(e.target.value);
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Updating your post!</h2>
          <br />
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Updated!"} show={success} />
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
              <ImageUploader
                width={"280px"}
                height={"180px"}
                handleUpload={handleImage}
              />
            </div>
          </div>
        </>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../" + props.id}
    />
  );
}

export default EditToysPt2;
