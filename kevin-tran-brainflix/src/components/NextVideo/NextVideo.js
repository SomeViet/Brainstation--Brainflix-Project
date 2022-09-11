import "./NextVideo.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";
import React from "react";

class NextVideo extends React.Component {
    render() {
        return (
            <div className="nextvideo">
                <h3 className="nextvideo__header">NEXT VIDEO</h3>
                {this.props.nextVideoData
                    ? this.props.nextVideoData.map((var1) => {
                          return (
                              <NextVideoCard
                                  key={var1.id}
                                  id={var1.id}
                                  thumbnail={var1.image}
                                  channel={var1.channel}
                                  title={var1.title}
                                  changeVideo={this.props.changeVideo}
                              />
                          );
                      })
                    : null}
            </div>
        );
    }
}

export default NextVideo;
