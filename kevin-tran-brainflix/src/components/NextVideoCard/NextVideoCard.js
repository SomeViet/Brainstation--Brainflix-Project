import "./NextVideoCard.scss";

function NextVideoCard() {
    return (
        <>
            <div className="nextvideocard">
                <img
                    src={""}
                    alt="next video thumbnail"
                    className="nextvideocard__thumbnail"
                />
                <div className="nextvideocard__right-container">
                    <p className="nextvideocard__video-title">
                        Become A Travel Pro In One Easy Lesson
                    </p>
                    <span className="nextvideocard__video-author">
                        Todd Welch
                    </span>
                </div>
            </div>
        </>
    );
}

export default NextVideoCard;
