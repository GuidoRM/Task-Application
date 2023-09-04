import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";
import "./../index.css"
import { useNavigate, useParams } from "react-router-dom"

export const TaskForm = () => {
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title:"",
        description:""
    })

    //Funcion para disparar eventos
    const dispatch = useDispatch();
    const params = useParams();
    const tasks = useSelector(state => state.tasks)

    const handleChange = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (params.id) {
            if (task.title.length > 0 && task.description.length > 0) {
                Swal.fire({
                    icon: "success",
                    title: "Task edited successfully",
                    text: "Go to the task list to see the edited task!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(editTask(task))
                        navigate("/")
                    }
                })
    
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Task not edited successfully",
                    text: "Title and description fields must not be empty"
                })
            }
        }else{
            if (task.title.length > 0 && task.description.length > 0) {
                Swal.fire({
                    icon: "success",
                    title: "Task created successfully",
                    text: "Go to the task list to see the new task!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(addTask({
                            ...task, id: uuid()
                        }))
                        navigate("/")
                    }
                })
    
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Task not created successfully",
                    text: "Title and description fields must not be empty"
                })
            }
        }
    }

    useEffect(()=>{
        if (params.id){
           setTask(tasks.find((task) => task.id === params.id))
        }
    },[])

    return (
        <>
            <h1 className="w-100 text-3xl m-3">Form to { params.id?"edit":"create"} tasks</h1>
            <form onSubmit={handleSubmit} className="grid md:w-full lg:w-1/2 grid-cols-1 gap-4 w-full text-black">
                <input value={task.title} placeholder="Task Title" onChange={handleChange} type="text" name="title" className="rounded-md px-2 py-1 outline-none" />
                <textarea value={task.description} placeholder="Task Description" onChange={handleChange} name="description" className="rounded-md h-32 px-2 py-1 outline-none" />
                <button className="px-2 py-1 bg-sky-700 rounded-md text-white hover:bg-sky-900" type="submit">{ params.id?"EDIT":"CREATE"} TASK</button>
            </form>
        </>
    )
}
