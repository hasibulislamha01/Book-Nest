import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Drawer from "../Components/Drawer";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    console.log('user image', user?.photoURL)
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
    // const menu = document.getElementById('menuOptions')
    const middleNav = document.getElementById('centerNav')
    const rightNav = document.getElementById('rightNav')
    window.addEventListener('scroll',
        function () {
            if (window.pageYOffset >= middleNav.offsetTop) {
                navbar.classList.add("navSticky")
                middleNav.classList.add('translateRight')
            } else {
                // rightNav.style.transition= '2s'
                navbar.classList.remove('navSticky')
                middleNav.classList.remove('translateRight')
                
            }
            
            const newNavHeight = window.pageYOffset > 100 ? '50px' : '55px';
            navbar.style.height= newNavHeight;
        }
    )


    const navigationOptions =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Home</NavLink>
            <NavLink to='/allBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>All Book</NavLink>
            <NavLink to='/addBooks' className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Add Book</NavLink>
            <NavLink to={`/borrowedBooks/${user?.email}`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-gray-400'}>Borrowed Book</NavLink>

        </>
    return (
        <div id="navContainer" className="h-14 w-full z-10 mono font-bold bg-slate-100 opacity-60 fixed top-0">
            <div className="navbar container mx-auto min-w-12  ">
                <Toaster></Toaster>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-xl font-md opacity-100 bg-black text-white">
                            {navigationOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BookNest</a>
                </div>
                <div id="centerNav" className="navbar-center lg:flex dummy-class" >
                    <ul className="menu menu-horizontal px-1 text-lg font-medium space-x-5 hidden md:inline-flex" >
                        {navigationOptions}
                    </ul>
                </div>
                <div id="rightNav" className="navbar-end h-auto">
                    <Drawer></Drawer>

                </div>
            </div>
        </div>
    );
};

export default Navbar;