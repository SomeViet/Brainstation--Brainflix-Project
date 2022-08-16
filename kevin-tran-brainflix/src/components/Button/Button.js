import "./Button.scss";

function Button(props) {
    let buttonText = props.buttonText;
    let buttonIcon = props.buttonIcon;
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

export default Button;
