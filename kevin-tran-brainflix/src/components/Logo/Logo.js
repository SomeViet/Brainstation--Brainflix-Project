import "./Logo.scss";

function Logo(props) {
    let logo = props.logoImg;
    return (
        <>
            <img src={logo} alt="Logo" className="logo" />
        </>
    );
}

export default Logo;
