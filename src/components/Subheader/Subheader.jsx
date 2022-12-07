
import { useSelector } from "react-redux";
import AddForm from "../AddForm/AddForm";


const Subheader = () => {

    const { newApplicant, screening, interview } = useSelector((state) => state);
    const total = newApplicant.length + screening.length + interview.length;

    return (
        <div className="flex justify-between items-center mt-4">
            <h2 className="font-semibold">Total candidates: 
                <span className="bg-primary-color px-1 rounded text-white font-semibold ml-2">{total}</span>
            </h2>
            <AddForm/>
        </div>
    )
}

export default Subheader;