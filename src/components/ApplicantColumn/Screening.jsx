import ApplicantCard from "../ApplicantCard/ApplicantCard"
import { useDispatch } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { screeningSlice } from "../../redux/slice/screening";

const Screening = () => {

    const { screening } = useSelector((state) => state);
    const { actions: { remove }} = screeningSlice;

    const dispatch = useDispatch();

    return (
        <div className="w-1/4 mt-6">
            <div className="px-4 py-2 shadow-input flex justify-between border-t-4 border-blue-600 rounded">
                <h3 className="font-semibold">On screening: </h3>
                <h3 className="font-semibold">{screening.length}</h3>
            </div>
            <Droppable droppableId="screening">
            {(provided) => (
                <ul className="flex flex-col gap-y-3 mt-3"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {screening.map(
                    ({ id, name, position, createdAt }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided, snapshot) => (
                            <li
                                className={snapshot.isDragging ? 'shadow-onDrag' : null}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <ApplicantCard name={name} position={position} createdAt={createdAt} onDelete={() => dispatch(remove(id))}/> 
                            </li>
                        )}
                        </Draggable>
                    )
                    )}
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>
        </div>
    )
}

export default Screening