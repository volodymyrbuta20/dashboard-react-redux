import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import { newApplicantSlice } from "../../redux/slice/newApplicant";

const AddForm = () => {

    const { actions: {add}} = newApplicantSlice;

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const dispatch = useDispatch();

    const handleOnClick = (e) => {
        e.preventDefault();
        const newEmpl = {
            id: uuidv4(),
            name,
            position,
            createdAt: new Date().toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric' 
            }),
        }
        dispatch(add(newEmpl));
        setName("");
        setPosition("");
    };

    return (
        <form>
            <MyInput 
                className="shadow-input w-56 mr-2 rounded-lg px-4 py-1.5 outline-1 outline-slate-200"
                placeholder="Enter name" 
                value={name} 
                onChange={e => setName(e.target.value)}/>
            <MyInput 
                className="shadow-input w-56 mr-2 rounded-lg px-4 py-1.5 outline-1 outline-slate-200"
                placeholder="Enter position" 
                value={position} 
                onChange={e => setPosition(e.target.value)}/>
            <MyButton 
                onClick={handleOnClick}>
                    Add new applicant
            </MyButton>
        </form>
    )
}

export default AddForm;