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
        <>
            <header class="header">
                <div class="header__logo">
                    <Logo logoImg={logo} />
                </div>

                <form className="header__form">
                    <div class="header__searchbar">
                        <SearchBar />
                        <UserIcon userIcon={userAvatar} className="usericon" />
                    </div>
                    <Button buttonText={"UPLOAD"} buttonIcon={upload} />
                </form>
                <div class="header__icon">
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
