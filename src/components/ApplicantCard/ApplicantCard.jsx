import { MdDelete } from "react-icons/md";
import icon from "../../resources/images/Profile.png";

const ApplicantCard = ({name, position, createdAt, onDelete}) => {
    return (
        <div className="p-2 border-2 border-zinc-900/[.06] rounded bg-white">
            <div className="flex justify-between w-full">
                <div className="flex">
                    <div className="h-12 w-12 mr-8">
                        <img src={icon} alt="icon" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold text-base">{name}</p>
                        <p className="text-sm text-slate-600">{position}</p>
                    </div>
                </div>
                <button onClick={onDelete}><MdDelete className="h-6 w-6"/></button>
            </div>
            <hr className="my-4 rounded h-0.5 bg-gray-600/[.06]"/>
            <div className="text-sm"> Created at: <span className="font-semibold">{createdAt}</span></div>
        </div>
    )
}

export default ApplicantCard

