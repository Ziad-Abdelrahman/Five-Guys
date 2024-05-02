import img from "../assets/dashBoard.png";

function BackgroundPhoto() {
  return (
    <div className="backgroundphotoHolder">
      <div className="welcome">
        <h1 className="backgroundphotoText">
          Fueling Hope
          <br /> Igniting Change
        </h1>
      </div>
      <img
        className="backgroundphoto"
        draggable="false"
        src={img}
        alt="placeholder"
      />
    </div>
  );
}

export default BackgroundPhoto;
