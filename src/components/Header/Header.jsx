import MyInput from "../../UI/MyInput/MyInput";
import { MdNotificationsActive, MdSettings } from "react-icons/md";
import profile from "../../resources/images/Profile.png";

const Header = () => {
    return (
        <header className="flex justify-between">
            <MyInput placeholder="Search"/>
            <div className="flex items-center">
                <button><MdNotificationsActive className="h-6 w-6"/></button>
                <button className="mx-4"><MdSettings className="h-6 w-6"/></button>
                <img src={profile} alt="profile icon" />
            </div>
        </header>
    )
}

export default Header;