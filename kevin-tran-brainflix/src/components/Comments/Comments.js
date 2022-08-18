import "./Comments.scss";
import videoDetails from "../../data/video-details.json";
import UserIcon from "../UserIcon/UserIcon";
import CommentsInput from "../CommentsInput/CommentsInput";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

let videoDataDetails = videoDetails;

console.log(videoDataDetails);
// videoDataDetails.map((result) => {
//     console.log(result);
// });

function Comments() {
    return (
        <>
            <div className="comments">
                <h2 className="comments__count"> 3 Comments </h2>
                <div className="comments__subheader">
                    <div className="comments__alignment">
                        {/* This is for alignment */}
                    </div>
                    <h3 className="comments__join">JOIN THE CONVERSATION</h3>
                </div>

                <div className="comments__container">
                    <UserIcon userIcon={userAvatar} className="usericon" />
                    <CommentsInput />
                </div>
                {/* <CommentsHistory /> */}
            </div>
        </>
    );
}
export default Comments;
