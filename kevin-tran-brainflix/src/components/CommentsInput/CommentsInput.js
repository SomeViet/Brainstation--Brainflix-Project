import "./CommentsInput.scss";
import Button from "../Button/Button";
import CommentIcon from "../../assets/images/add_comment.svg";

function CommentsInput() {
    return (
        <form className="commentsinput">
            <textarea
                placeholder="Add a new comment"
                name=""
                minLength="1"
                className="commentsinput__text-area"
            ></textarea>
            <Button
                // "Comment" attributes
                buttonText={"COMMENT"}
                buttonIcon={CommentIcon}
            />
        </form>
    );
}

export default CommentsInput;
