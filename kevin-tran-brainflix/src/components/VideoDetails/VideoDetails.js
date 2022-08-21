import "./VideoDetails.scss";
import Author from "../Author/Author";
import DateStamp from "../DateStamp/DateStamp";
import Views from "../Views/Views";
import Likes from "../Likes/Likes";
import Divider from "../Divider/Divider";
import React from "react";

class VideoDetails extends React.Component {
    render() {
        return (
            <>
                <div className="videodetails">
                    <h1 className="videodetails__header">
                        {this.props.mainData.title}
                    </h1>
                    <Divider lineClass={"divider__tablet"} />
                    <div className="videodetails__subheader">
                        <div className="videodetails__subheader-left">
                            <Author mainData={this.props.mainData} />
                            <DateStamp mainData={this.props.mainData} />
                        </div>
                        <div className="videodetails__subheader-right">
                            <Views mainData={this.props.mainData} />
                            <Likes mainData={this.props.mainData} />
                        </div>
                    </div>
                    <Divider lineClass={"divider"} />

                    <div className="videodetails__description">
                        {this.props.mainData.description}
                    </div>
                </div>
            </>
        );
    }
}

export default VideoDetails;
