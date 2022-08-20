import "./NextVideo.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideo() {
    return (
        <>
            <div className="nextvideo">
                <h3 className="nextvideo__header">NEXT VIDEO</h3>
                <NextVideoCard />
                <NextVideoCard />
                <NextVideoCard />
                <NextVideoCard />
            </div>
        </>
    );
}

export default NextVideo;
