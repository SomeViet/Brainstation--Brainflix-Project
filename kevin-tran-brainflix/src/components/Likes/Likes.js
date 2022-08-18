import "./Likes.scss";
import likesIcon from "../../assets/images/likes.svg";

function Likes() {
    return (
        <>
            <div className="likes">
                <img src={likesIcon} className="likes__icon" alt="likes icon" />
                <div className="likes__count">1524564 Likes</div>
            </div>
        </>
    );
}

export default Likes;
