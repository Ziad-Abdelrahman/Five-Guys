import './Buttons.css'

interface AdminButton {
    text : string;
}
function AdminButton(props: AdminButton ){


    return (
        <button className="adminButton">{props.text}</button>
    );


}

export default AdminButton;
