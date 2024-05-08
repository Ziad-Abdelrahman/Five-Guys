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
                hasText={bookName != ""}
                setChecked={setBookName}
              />
              <EditInputBox
                type={"text"}
                label={"Author name"}
                width={"280px"}
                text={authorName}
                hasText={authorName != ""}
                setChecked={setAuthorName}
              />
            </div>
            <div style={divStyle}>
              <EditInputBox
                type={"text"}
                label={"Language"}
                width={"280px"}
                text={language}
                hasText={language != ""}
                setChecked={setLanguage}
              />
              <EditInputBox
                type={"text"}
                label={"Edition"}
                width={"280px"}
                text={edition}
                hasText={edition != ""}
                setChecked={setEdition}
              />
            </div>
            <p />
            <h4> How many copies do you need?</h4>
            <EditNumberInputBox
              label={"Quantity"}
              width={"280px"}
              text={quantity}
              hasText={quantity != ""}
              setChecked={setQuantity}
            />
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../cont/" + props.id}
      backButtonPath={"../../ViewPosts"}
    />
  );
}

export default EditBooks;
