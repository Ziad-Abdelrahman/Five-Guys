
import './Buttons.css'; // This imports the styles
function DonateButton(){

    const styles = {
        fontSize: "15px",
        fontWeight: "bold",
    }

    return (
        <button className="donation-button" style={styles} >Donate</button>
    );
}

export default DonateButton;