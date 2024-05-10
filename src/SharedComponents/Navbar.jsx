import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        if (user) {
            logoutUser()
                .then(() => {
                    toast.success('Logout Successful')
                })
                .catch((error) => {
                    toast.error(error.message)
                })
        } else {
            toast.error('user is not Authenticated')
        }
    }
    const navigationOptions =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Home</NavLink>
            <NavLink to='/allBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>All Book</NavLink>
            <NavLink to='/addBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Add Book</NavLink>
            <NavLink to='/borrowedBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Borrowed Book</NavLink>
            
        </>
    return (
        <div className="navbar bg-base-100">
            <Toaster></Toaster>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-md">
                        {navigationOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BookNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-medium space-x-5">
                    {navigationOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                        : <Link to='/login' className="btn btn-ghost">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;