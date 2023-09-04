import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <header className='fixed bg-zinc-600 top-0 h-20 backdrop-blur w-full flex justify-between aligns-center px-4 py-5 text-white'>
            <h1 className="font-montserrat md:text-xl self-center lg:text-2xl font-semibold">Task Application</h1>
            <nav className="flex gap-5">
                <NavLink 
                className={ ({ isActive }) => `w-16 px-2 py-1 self-center text-center rounded-md aligns-center justify-center ${isActive ? "bg-zinc-900" : "bg-zinc-500"}`  }
                to={"/create"}>Create</NavLink>
                <NavLink 
                className={ ({ isActive }) => `w-16 px-2 py-1 self-center text-center rounded-md aligns-center justify-center ${isActive ? "bg-zinc-900" : "bg-zinc-500"}`  }
                to={"/"}>List</NavLink>

        </nav>
        </header >
    )
}

export default Header