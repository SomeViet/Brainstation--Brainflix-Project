import "./Comments.scss";
import UserIcon from "../UserIcon/UserIcon";
import CommentsInput from "../CommentsInput/CommentsInput";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentsHistory from "../CommentsHistory/CommentsHistory";
import videoDetails from "../../data/video-details.json";

let videoDataDetails = videoDetails;

// videoDataDetails.map((result) => {
//     console.log(result);
// });

function Comments() {
    return (
        <>
            <div className="comments">
                <h2 className="comments__count"> 3 Comments </h2>
                <div className="comments__subheader">
                    {/* This is for alignment */}
                    <div className="comments__alignment"></div>
                    <h3 className="comments__join">JOIN THE CONVERSATION</h3>
                </div>

                <div className="comments__container">
                    <UserIcon userIcon={userAvatar} className="usericon" />
                    <CommentsInput />
                </div>
                <CommentsHistory />
                <CommentsHistory />
                <CommentsHistory />
                {/* <Divider /> */}
            </div>
        </>
    );
}
export default Comments;
