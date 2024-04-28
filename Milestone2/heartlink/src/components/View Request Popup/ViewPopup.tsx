import './viewRequest.css'
interface viewPopupProps {
    name: string;
    OrgInfo: string;
    picture: string;
    DonationInfo: string;
    quantity:string;
    age:string;
    Season:string;
    material:string;
    gender:string;
}

function viewPopup(props: viewPopupProps){
    return(
        <div className="popup-container">
            <div className="top-section">
                <img src={props.picture} alt={props.name}/>
                <h5 style={{ lineHeight:'1.3' }}>{props.OrgInfo}</h5>
            </div>
            <div className="Bottom-section">
                <h1>{props.name}</h1>
                <hr/>
                <h3 style={{ textAlign:'left' }}>{props.DonationInfo}</h3>
                <p><strong  style={{ fontSize:'16px' }}>Age:</strong> {props.age}</p>
                <p><strong style={{ fontSize:'16px' }}>Season:</strong> {props.Season}</p>
                <p><strong style={{ fontSize:'16px' }}>Gender:</strong> {props.gender}</p>
                <p><strong style={{ fontSize:'16px' }}>Material:</strong> {props.material}</p>
                <p><strong style={{ fontSize:'16px' }}>Quantity:</strong> {props.quantity}</p>
            </div>

        </div>

    )

}

export default viewPopup;