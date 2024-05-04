import './OrgLeftDiv.css'
import '../../Buttons/Buttons.css'
import arrow from "../../../assets/right-arrow.png";
function OrgLeftDiv(){

    return(
        <>
            <div className="dropdown">
                <button className="dropbtn">Posts
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>
                <div className="dropdown-content">
                <a href="#">View All Posts</a>
                    <a href="#">Create Post</a>
                    <a href="#">Delete Post</a>
                    <a href="#">Edit Post</a>
                </div>
            </div>
            <button className="dropbtn">Drop-off Time
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>




        </>
    );

}

export default OrgLeftDiv;