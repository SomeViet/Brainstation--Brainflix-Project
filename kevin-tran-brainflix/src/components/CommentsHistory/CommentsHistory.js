import "./CommentsHistory.scss";
import Divider from "../Divider/Divider";
import BlankIcon from "../BlankIcon/BlankIcon";
import DateStamp from "../DateStamp/DateStamp";
import React from "react";

class CommentsHistory extends React.Component {
    render() {
        return (
            <>
                <Divider lineClass={"divider"} />
                <div className="comhistory">
                    {/* Temporary Blank Icon */}
                    <BlankIcon />
                    <div className="comhistory__right-container">
                        <div className="comhistory__right-subheader">
                            <span className="comhistory__name">
                                {" "}
                                {this.props.name}
                            </span>
                            <DateStamp mainData={this.props} />
                        </div>
                        <p className="comhistory__comment">
                            {this.props.comment}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default CommentsHistory;
