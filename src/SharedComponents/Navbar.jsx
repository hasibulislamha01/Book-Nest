import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Drawer from "../Components/Drawer";

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

    
    const navbar = document.getElementById('navContainer')
    const menu = document.getElementById('menuOptions')
    const middleNav = document.getElementById('centerNav')
    const rightNav = document.getElementById('rightNav')
    window.onscroll = function(){
        if(window.pageYOffset >= menu.offsetTop){
            middleNav.classList.remove('navbar-center')
            rightNav.classList.remove('navbar-end')
            navbar.classList.add("navSticky")
            rightNav.classList.add('hidden')
            middleNav.classList.add('slidingNav')
            middleNav.style.transition= '2s'
            // rightNav.style.transition= '2s'
        } else {
            // rightNav.style.transition= '2s'
            navbar.classList.remove('navSticky')
            middleNav.classList.remove('slidingNav')
            rightNav.classList.remove('hidden')
            middleNav.classList.add('navbar-center translateleft')
            // middleNav.style.transition= '2s'
            rightNav.classList.add('navbar-end')
        }
    }

    const navigationOptions =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Home</NavLink>
            <NavLink to='/allBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>All Book</NavLink>
            <NavLink to='/addBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Add Book</NavLink>
            <NavLink to={`/borrowedBooks/${user?.email}`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Borrowed Book</NavLink>

        </>
    return (
        <div id="navContainer" className="navContainer  w-full z-10 mono font-bold">
            <div className="navbar container mx-auto">
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
                <div id="centerNav" className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium space-x-5" id="menuOptions">
                        {navigationOptions}
                    </ul>
                </div>
                <div id="rightNav" className="navbar-end">
                    <Drawer></Drawer>
                    {
                        user ?
                            <div className="flex items-center">
                                <img className="z-50 h-12 w-12 rounded-full" src={user?.imageURL} alt="" />
                                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                            </div>
                            : <Link to='/login' className="btn btn-ghost">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;