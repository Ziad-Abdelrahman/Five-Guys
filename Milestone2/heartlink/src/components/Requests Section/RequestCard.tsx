import DonateButton from "../Buttons/DonateButton.tsx";
import ViewButton from "../Buttons/ViewButton.tsx";
import './request.css';
import'../Buttons/Button.css';
import'../Categories Section/Categories.css';

interface RequestCardProps {
    image: string;
    description: string;
    postedby: string;
    postdate: string;
}

function RequestCard(props: RequestCardProps) {
    return (
        <>
            <div className="request-container">
                <img className="request-card-image" src={props.image} alt={props.description}/>
                <div className="text-container">
                    <h2 style={{fontSize:'22px'}}>{props.description}</h2>
                    <p>Posted By: {props.postedby}</p>
                    <p>Post Date: {props.postdate}</p>
                </div>

                <div className="two-buttons-holder">
                    <ViewButton/>
                    <DonateButton/>
                </div>

            </div>
        </>

    );
}


export default RequestCard;
