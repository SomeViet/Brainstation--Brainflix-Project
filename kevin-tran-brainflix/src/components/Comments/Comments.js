import "./Comments.scss";
import UserIcon from "../UserIcon/UserIcon";
import CommentsInput from "../CommentsInput/CommentsInput";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentsHistory from "../CommentsHistory/CommentsHistory";
import Divider from "../Divider/Divider";
import React from "react";

export default function Comments({ mainData }) {
    return (
        <div className="comments">
            <h2 className="comments__count">
                {/* Will output null while loading promised data */}
                {mainData.comments ? mainData.comments.length : null} Comments
            </h2>
            <div className="comments__subheader">
                {/* This is for alignment */}
                <div className="comments__alignment"></div>
                <h3 className="comments__join">JOIN THE CONVERSATION</h3>
            </div>

            <div className="comments__container">
                <UserIcon userIcon={userAvatar} className="usericon" />
                <CommentsInput />
            </div>

            {/* Will output null while loading promised data */}
            {mainData.comments
                ? mainData.comments.map((var1, index) => {
                      return (
                          <CommentsHistory
                              key={index}
                              comment={var1.comment}
                              timestamp={var1.timestamp}
                              name={var1.name}
                          />
                      );
                  })
                : null}
            <Divider lineClass={"divider"} />
        </div>
    );
}
