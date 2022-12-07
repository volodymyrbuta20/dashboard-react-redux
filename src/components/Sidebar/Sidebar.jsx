
import logo from "../../resources/images/Docker-Logo-2015-2017.png";
import { MdDashboard, MdArticle, MdNoteAdd, MdAccountBox } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="w-[250px] fixed top-0 bottom-0 overflow-y-auto bg-gradient-to-bl from-neutral-700 to-neutral-900">
            <div className="h-[90px]">
                <img src={logo} alt="logo" className="h-full mx-auto" />
            </div>
            <hr className="bg-zinc-500"/>
            <ul className="p-6">
                <li className="mt-2 bg-sky-700 hover:bg-neutral-700 rounded-lg">
                    <a href="#" className="p-2 w-full">
                        <div className="flex items-center text-lg text-white"><MdDashboard className="mr-5 w-[26px] h-[26px]"/> Dashboard</div>
                    </a>
                </li>
                <li className="mt-2 hover:bg-neutral-700 rounded-lg">
                    <a href="#" className="p-2 w-full">
                        <div className="flex items-center text-lg text-white"><MdArticle className="mr-5 w-[26px] h-[26px]"/> Tables</div>
                    </a>
                </li>
                <li className="mt-2 hover:bg-neutral-700 rounded-lg">
                    <a href="#" className="p-2 w-full">
                        <div className="flex items-center text-lg text-white"><MdNoteAdd className="mr-5 w-[26px] h-[26px]"/> Notifications</div>
                    </a>
                </li>
                <li className="mt-2 hover:bg-neutral-700 rounded-lg">
                    <a href="#" className="p-2 w-full">
                        <div className="flex items-center text-lg text-white"><MdAccountBox className="mr-5 w-[26px] h-[26px]"/> Sign in</div>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;