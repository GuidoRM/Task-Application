import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"
import { Link } from "react-router-dom"

export const TaskList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {tasks.map( task => (
                    <div className='bg-neutral-800 p-4 rounded-md' key={task.id}>
                        <header className="flex justify-between">
                            <h3>{task.title}</h3>
                            <div className="flex gap-4">
                                <Link 
                                        className="bg-zinc-600 text-xs py-1 px-2 rounded-md self-center"
                                        to={`/edit-task/${task.id}`}
                                    >
                                        Edit
                                </Link>

                                <button 
                                    onClick={()=>{handleDelete(task.id)}}
                                    className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                                >
                                    Delete
                                </button>
                            </div>
                        </header>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
