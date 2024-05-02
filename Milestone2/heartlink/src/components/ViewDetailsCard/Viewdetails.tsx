import ViewButton from "../Buttons/ViewButton.tsx";
import './Viewdetails.css'
import'../Buttons/Buttons.css';

interface ViewdetailsProps {
    image: string;
    description:string;
    postedby: string;
    email:string;
    subject:string;
    area:string;
}

function Viewdetails(props: ViewdetailsProps) {
    return (
        <>
            <div className="details-container">
                <img className="probono-image" src={props.image} alt={props.description}/>
                <div className="text-container">
                    <h2 style={{fontSize:'18px'}}>{props.description}</h2>
                    <p>Posted By: {props.postedby}</p>
                    <p>Email: {props.email}</p>
                    <p>Subject: {props.subject}</p>
                    <p>Area: {props.area}</p>
                </div>

               

            </div>
        </>

    );
}
export default Viewdetails