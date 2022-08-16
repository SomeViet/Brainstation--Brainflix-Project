import "./UserIcon.scss";

function UserIcon(props) {
    let userIcon = props.userIcon;
    let userIconClass = props.className;
    return (
        <>
            <img src={userIcon} alt="user icon" className={userIconClass} />
        </>
    );
}

export default UserIcon;
