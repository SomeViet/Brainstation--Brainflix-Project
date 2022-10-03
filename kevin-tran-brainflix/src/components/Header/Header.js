import "./Header.scss";
import logoImg from "../../assets/images/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import Button from "../Button/Button";
import UserIcon from "../UserIcon/UserIcon";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/" className="header__home-link">
                        <Logo logoImg={logoImg} />
                    </Link>
                </div>

                <form className="header__form">
                    <div className="header__searchbar-container">
                        <SearchBar />
                        <span className="header__icon-mobile">
                            <UserIcon userIcon={userAvatar} />
                        </span>
                    </div>
                    <Link to="/vidupload" className="header__upload-link">
                        <Button buttonText={"UPLOAD"} buttonIcon={upload} />
                    </Link>
                    <span className="header__icon-tablet">
                        <UserIcon userIcon={userAvatar} />
                    </span>
                </form>
            </div>
        </header>
    );
}
