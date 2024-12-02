import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/menuSvg.svg"
import PropTypes from "prop-types";
import Drawer from "../../Components/Drawer";

const HorizontalNav = ({ routesCollection, openSideNav, user }) => {
    return (
        <div className='flex items-center justify-end px-2 md:px-0'>

            {/* logo */}
            <div className='flex items-center mr-auto'>
                <h1 className="text-lavender">BookNest</h1>
            </div>

            <div className='hidden md:flex items-center md:gap-5 lg:gap-6 transition-all duration-500'>
                {
                    routesCollection?.map(route =>
                        <NavLink
                            key={route.link}
                            to={route.link}
                            className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}>{route.title}
                        </NavLink>
                    )
                }
                <NavLink to={`/borrowedBooks/${user?.email}`} className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}>Borrowed Book</NavLink>

                <Drawer/>
            </div>
            
            <img src={menuIcon} onClick={openSideNav} alt="menu icon" className="inline-flex md:hidden" />
        </div >
    );
};

HorizontalNav.propTypes = {
    routesCollection: PropTypes.array,
    openSideNav: PropTypes.func,
    user: PropTypes.object
}
export default HorizontalNav;