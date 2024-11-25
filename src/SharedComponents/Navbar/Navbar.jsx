import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider";
import { Toaster } from "react-hot-toast";
import Drawer from "../../Components/Drawer";
import './Navbar.css'


const navRoutes = [
    { title: 'Home', href: '/' },
    { title: 'All Books', href: '/allBooks' },
    { title: 'Add Books', href: '/addBooks' },
]


const Navbar = () => {

    const { user } = useContext(AuthContext)
    console.log('user image', user?.photoURL)

    const navbar = document.getElementById('navContainer')
    const middleNav = document.getElementById('centerNav')



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

        }
    )




    const navigationOptions =
        <>
            {
                navRoutes?.map(route =>
                    <NavLink key={route.href}
                        to={route.href}
                        className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>{route.title}</NavLink>

                )
            }

            <NavLink to={`/borrowedBooks/${user?.email}`} className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>Borrowed Book</NavLink>

        </>
    return (
        <div id="navContainer" className="w-full z-10 mono font-bold fixed top-0">
            <div className="inner-container ">
                <div className="navbar min-w-12  flex justify-between ">

                    <div id="leftNav" className="navbar-start w-[140px]">
                        {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-xl font-md opacity-100 bg-black text-white" id="navDrop">
            {navigationOptions}
        </ul>
    </div> */}
                        <a className="btn btn-ghost text-xl text-primary dark:text-yellow-400">BookNest</a>
                    </div>

                    <div id="centerNav" className="md:hidden navbar-center lg:flex dummy-class " >
                        <ul className="menu menu-horizontal px-1 text-lg font-medium space-x-5 hidden md:inline-flex" >
                            {navigationOptions}
                        </ul>
                    </div>

                    <div id="rightNav" className="navbar-end w-[90px] h-auto">
                        <Drawer></Drawer>
                        <Toaster></Toaster>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;