import "./NextVideo.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";
import React from "react";

export default function NextVideo({ nextVideoData }) {
    return (
        <div className="nextvideo">
            <h3 className="nextvideo__header">NEXT VIDEO</h3>
            {nextVideoData
                ? nextVideoData.map(({ id, image, channel, title }) => {
                      return (
                          <NextVideoCard
                              key={id}
                              id={id}
                              thumbnail={image}
                              channel={channel}
                              title={title}
                          />
                      );
                  })
                : null}
        </div>
    );
}
