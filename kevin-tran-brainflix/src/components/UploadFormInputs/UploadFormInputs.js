import "./UploadFormInputs.scss";

export default function UploadFormInputs() {
    return (
        <div className="uploadforminput">
            <div>
                <h3 className="uploadforminput__label">TITLE YOUR VIDEO</h3>
                <input
                    className="uploadforminput__title"
                    type="text"
                    placeholder="Add a title to your video"
                />
            </div>
            <div className="uploadforminput__description-container">
                <h3 className="uploadforminput__label">
                    ADD A VIDEO DESCRIPTION
                </h3>
                <textarea
                    className="uploadforminput__description"
                    placeholder="Add a description to your video"
                    name=""
                    minLength="4"
                ></textarea>
            </div>
        </div>
    );
}
