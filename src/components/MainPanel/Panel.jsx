import NewApplicant from "../ApplicantColumn/NewApplicant";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "../AddForm/AddForm";
import { newApplicantSlice as newApplicant } from "../../redux/slice/newApplicant";
import { screeningSlice as screening } from "../../redux/slice/screening";
import { interviewSlice as interview } from "../../redux/slice/interview";
import Screening from "../ApplicantColumn/Screening";
import Interview from "../ApplicantColumn/Interview";


const Panel = () => {

    const dispatch = useDispatch();
    const appState = useSelector((state) => state);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
    
        const { destination, source, draggableId } = result;
        const allSlices = { newApplicant, screening, interview };
    
        if (destination.droppableId === source.droppableId) {
            dispatch(
                allSlices[destination.droppableId].actions.reorder(result)
            );
        } else {
            const [filterState] = ((appState)[source.droppableId]).filter(({ id }) => id === draggableId);
        
            dispatch(
                allSlices[source.droppableId].actions.remove(draggableId)
            );
            dispatch(
                allSlices[destination.droppableId].actions.update({
                ...result,
                filterState
                })
            );
        }
    };

    return (
        <div className="ml-[250px] p-4">
            <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
                <div className="flex gap-x-3">
                    <NewApplicant/>
                    <Screening/>
                    <Interview/>
                </div>
            </DragDropContext>
        </div>
    )
}

export default Panel;