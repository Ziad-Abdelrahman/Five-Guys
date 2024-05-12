import { useState } from "react";
import EditInputBox from "../../../components/InputBox/EditInputBox.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface BooksProps {
  id: string;
  bookName: string;
  authorName: string;
  language: string;
  edition: string;
  quantity: string;
}

function EditBooks(props: BooksProps) {
  const [bookName, setBookName] = useState(props.bookName);
  const [authorName, setAuthorName] = useState(props.authorName);
  const [language, setLanguage] = useState(props.language);
  const [edition, setEdition] = useState(props.edition);
  const [quantity, setQuantity] = useState(props.quantity);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    if (bookName.trim() === "" || authorName.trim() === "" || language.trim() === "" || edition.trim() === "" || quantity.trim() === "") {
      setErrorMessage("Please provide all required details. ");
      return false;
    }
    setErrorMessage("");
    console.log("Form submitted successfully!");
    return true;
  };

  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "575px",
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Editing your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h1>Book Donation</h1>
          </div>
          <div className="rest-container" style={{ top: "12em" }}>
            <h4 style={{ padding: "13px" }}> What are the book's details?</h4>
            <div style={divStyle}>
              <EditInputBox
                type={"text"}
                label={"Book name"}
                width={"280px"}
                text={bookName}
                hasText={true}
                setChecked={setBookName}
              />
              <EditInputBox
                type={"text"}
                label={"Author name"}
                width={"280px"}
                text={authorName}
                hasText={true}
                setChecked={setAuthorName}
              />
            </div>
            <div style={divStyle}>
              <EditInputBox
                type={"text"}
                label={"Language"}
                width={"280px"}
                text={language}
                hasText={true}
                setChecked={setLanguage}
              />
              <EditInputBox
                type={"text"}
                label={"Edition"}
                width={"280px"}
                text={edition}
                hasText={true}
                setChecked={setEdition}
              />
            </div>
            <p />
            <h4> How many copies do you need?</h4>
            <EditNumberInputBox
              label={"Quantity"}
              width={"280px"}
              text={quantity}
              hasText={true}
              setChecked={setQuantity}
            />
            {errorMessage && (<div style={{ color: "red", marginTop: "0.5rem" }}>{errorMessage}</div>)}
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../cont/" + props.id}
      backButtonPath={"../../ViewPosts"}
      handleClick={handleClick}
    />
  );
}

export default EditBooks;
