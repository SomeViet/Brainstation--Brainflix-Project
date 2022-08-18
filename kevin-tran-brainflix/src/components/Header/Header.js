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
                <div className="header__rightcontainer">
                    <form className="header__form">
                        <div className="header__searchbar">
                            <SearchBar />
                            <UserIcon
                                userIcon={userAvatar}
                                className="usericon__header"
                            />
                        </div>
                        <Button
                            buttonText={"UPLOAD"}
                            buttonIcon={upload}
                            buttonClass={"button__header"}
                        />
                    </form>
                    <div className="header__icon">
                        <UserIcon
                            userIcon={userAvatar}
                            className="usericon__header--tablet"
                        />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
