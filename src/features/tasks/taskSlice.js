//Funciones dentro que se van a hacer dentro del estado
//Crear, eliminar, actualizar y listar datos de un arreglo
//Para hacerlo necesitamos de una funcion llamada createSlice
import { createSlice } from "@reduxjs/toolkit";

//initialState -> Es lo mismo que crear un estado normal con React
const initialState = [
    {
        id:"1",
        title:"Task 1",
        description:"Task 1 description",
        completed: false
    },
    {
        id:"2",
        title:"Task 2",
        description:"Task 2 description",
        completed: false
    }
]
//reducers -> Le indicamos que puede hacer el estado
export const taskSlice = createSlice({
    name:"task",
    initialState: initialState,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const foundTask = state.find(task => task.id == action.payload);
            if(foundTask){
                state.splice(state.indexOf(foundTask),1)
            }
        },
        editTask: ( state, action) => {
            const {id, title, description} = action.payload;
            const foundTask = state.find(task => task.id === id);
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        }
    
    }
})

export const {addTask, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer