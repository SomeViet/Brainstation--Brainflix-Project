import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import Button from "../Button/Button";
import UserIcon from "../UserIcon/UserIcon";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" className="header__logo" />
                <div>
                    <form className="header__form">
                        <SearchBar />
                        <UserIcon userIcon={userAvatar} className="usericon" />
                        <Button buttonText={"UPLOAD"} buttonIcon={upload} />
                    </form>
                    <UserIcon
                        userIcon={userAvatar}
                        className="usericon--tablet"
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
