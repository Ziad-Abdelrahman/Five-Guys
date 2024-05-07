import InputBox from "../../components/InputBox/InputBox.tsx";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import Template1 from "../../components/Templates/Template1.tsx";

function Books() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "575px",
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Creating your post!</h2>
          <p> Few steps left.. </p>
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
              <InputBox type={"text"} label={"Book name"} width={"280px"} />
              <InputBox type={"text"} label={"Author name"} width={"280px"} />
            </div>
            <div style={divStyle}>
              <InputBox type={"text"} label={"Language"} width={"280px"} />
              <InputBox type={"text"} label={"Edition"} width={"280px"} />
            </div>
            <p />
            <h4> How many copies do you need?</h4>
            <NumberInputBox label={"Quantity"} width={"280px"} />
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath="../2"
      backButtonPath="../../"
    />
  );
}

export default Books;
