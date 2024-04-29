import InputBox from "../components/InputBox/InputBox.tsx";

function BooksPt2() {
  return (
    <>
      <div className="header-container">
        <h1>Book Donation</h1>
      </div>
      <div className="rest-container" style={{ top: "12em" }}>
        <h4> What are the book's details?</h4>
        <div style={{ display: "flex" }}>
          <InputBox type={"text"} label={"Book name"} width={"280px"} />
          <InputBox type={"text"} label={"Author name"} width={"280px"} />
        </div>
        <div className="mb-3" style={{ width: "600px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Write a summary for the book
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={9}
            style={{ height: "270px" }}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default BooksPt2;
