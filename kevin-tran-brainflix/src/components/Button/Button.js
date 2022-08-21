import "./Button.scss";

function Button(props) {
    let buttonText = props.buttonText;
    let buttonIcon = props.buttonIcon;
    return (
        <>
            {/* button-type button to prevent form submission */}
            <button type="button" className="button">
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
