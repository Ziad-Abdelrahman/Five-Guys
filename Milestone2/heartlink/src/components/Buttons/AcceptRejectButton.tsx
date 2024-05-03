import './Buttons.css'

interface AcceptRejectButton {
    text : string;
}
function AcceptRejectButton(props: AcceptRejectButton ){


    return (
        <button className="accept" >{props.text}</button>
    );


}

export default AcceptRejectButton;
