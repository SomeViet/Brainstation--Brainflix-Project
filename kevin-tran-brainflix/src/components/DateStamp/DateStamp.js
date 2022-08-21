import React from "react";
import "./DateStamp.scss";

class DateStamp extends React.Component {
    render() {
        let dateFormatted = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(this.props.mainData.timestamp);

        return (
            <>
                <div className="datestamp">{dateFormatted}</div>
            </>
        );
    }
}

export default DateStamp;
