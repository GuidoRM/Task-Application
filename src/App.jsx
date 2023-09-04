//Tiene acceso a todo el estado
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  const taskState = useSelector(state => state.tasks);
  console.log(taskState);
  return (
    <>
      <Header/>
      <div className='bg-zinc-900 text-white mt-20'>
        <div className='flex min-h-screen max-h-[fit-content] flex-col items-center justify-start w-full p-4'>
            <Routes>
              <Route path='/' element={<TaskList/>}/>
              <Route path='/create' element={<TaskForm/>}/>
              <Route path='/edit-task/:id' element={<TaskForm/>}/>
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
