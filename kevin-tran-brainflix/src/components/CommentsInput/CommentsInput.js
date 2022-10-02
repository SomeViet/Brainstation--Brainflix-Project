import "./CommentsInput.scss";
import Button from "../Button/Button";
import CommentIcon from "../../assets/images/add_comment.svg";

export default function CommentsInput() {
    // Not attempting diving deeper, to turn off refresh
    const preventRefresh = (event) => {
        event.preventDefault();
    };

    return (
        <form className="commentsinput" onSubmit={preventRefresh}>
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
