//Store -> Lugar donde se almacena nuestros datos

//ConfigureStore nos devuelve un objeto
import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../features/tasks/taskSlice";

//Nos permite dividir el estado en multiples archivos
//Reducer -> formas para manipular el estado (slice para crearlo)
//Slice -> Parte de un estado
export const store = configureStore({
    reducer:{
        tasks: taskReducer
    }
})

