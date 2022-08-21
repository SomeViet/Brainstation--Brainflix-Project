import "./UserIcon.scss";

function UserIcon(props) {
    let userIcon = props.userIcon;
    return <img src={userIcon} alt="user icon" className="usericon" />;
}

export default UserIcon;
