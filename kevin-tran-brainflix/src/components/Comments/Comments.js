import "./Comments.scss";
import UserIcon from "../UserIcon/UserIcon";
import CommentsInput from "../CommentsInput/CommentsInput";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentsHistory from "../CommentsHistory/CommentsHistory";
import videoDetails from "../../data/video-details.json";
import React from "react";

let videoDataDetails = videoDetails;

// videoDataDetails.map((result) => {
//     console.log(result);
// });

class Comments extends React.Component {
    render() {
        return (
            <>
                <div className="comments">
                    <h2 className="comments__count">
                        {this.props.mainData.comments.length} Comments
                    </h2>
                    <div className="comments__subheader">
                        {/* This is for alignment */}
                        <div className="comments__alignment"></div>
                        <h3 className="comments__join">
                            JOIN THE CONVERSATION
                        </h3>
                    </div>

                    <div className="comments__container">
                        <UserIcon userIcon={userAvatar} className="usericon" />
                        <CommentsInput />
                    </div>
                    {this.props.mainData.comments.map((var1, index) => {
                        return (
                            <CommentsHistory
                                key={index}
                                comment={var1.comment}
                                timestamp={var1.timestamp}
                                name={var1.name}
                            />
                        );
                    })}
                    {/* <CommentsHistory mainData={this.props.mainData} /> */}
                    {/* <Divider /> */}
                </div>
            </>
        );
    }
}
export default Comments;