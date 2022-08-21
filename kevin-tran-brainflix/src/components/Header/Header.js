import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import Button from "../Button/Button";
import UserIcon from "../UserIcon/UserIcon";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Logo logoImg={logo} />
            </div>
            <form className="header__form">
                <div className="header__searchbar-container">
                    <SearchBar />
                    <span className="header__icon-mobile">
                        <UserIcon userIcon={userAvatar} />
                    </span>
                </div>

                <Button
                    // "Upload" attributes
                    buttonText={"UPLOAD"}
                    buttonIcon={upload}
                />
                <span className="header__icon-tablet">
                    <UserIcon userIcon={userAvatar} />
                </span>
            </form>
        </header>
    );
}

export default Header;
