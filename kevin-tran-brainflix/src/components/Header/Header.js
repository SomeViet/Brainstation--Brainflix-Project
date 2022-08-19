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
            <header className="header">
                <div className="header__logo">
                    <Logo logoImg={logo} />
                </div>
                <form className="header__form">
                    <div className="header__searchbar-container">
                        <SearchBar />
                        <UserIcon
                            userIcon={userAvatar}
                            className="usericon__header"
                        />
                    </div>

                    <Button
                        // "Upload" attributes
                        buttonText={"UPLOAD"}
                        buttonIcon={upload}
                        buttonClass={"button__header"}
                    />
                    <UserIcon
                        userIcon={userAvatar}
                        className="usericon__header-tablet"
                    />
                </form>
            </header>
        </>
    );
}

export default Header;
