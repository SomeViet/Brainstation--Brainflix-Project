import "./Button.scss";

export default function Button({ buttonText, buttonIcon }) {
    return (
        <>
            <button type="submit" className="button">
                <img
                    src={buttonIcon}
                    alt="button icon"
                    className="button__icon"
                />
                {buttonText}
            </button>
        </>
    );
}
