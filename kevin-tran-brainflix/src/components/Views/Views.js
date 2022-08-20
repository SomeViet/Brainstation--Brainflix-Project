import "./Views.scss";
import viewIcon from "../../assets/images/views.svg";
import React from "react";

class Views extends React.Component {
    render() {
        return (
            <>
                <div className="views">
                    <img
                        src={viewIcon}
                        className="views__icon"
                        alt="view icon"
                    />
                    <div className="views__count">
                        {this.props.mainData[0].views}
                    </div>
                </div>
            </>
        );
    }
}

export default Views;
