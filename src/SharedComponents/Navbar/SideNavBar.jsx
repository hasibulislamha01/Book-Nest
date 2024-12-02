import { NavLink } from 'react-router-dom';
import closeIcon from '../../assets/closeSvg.svg'
import PropTypes from 'prop-types';
import ThemeToggler from '../../Components/UI/ThemeToggler';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import toast from 'react-hot-toast';

const SideNavBar = ({ hideSideNav, routesCollection }) => {

    const {user, logoutUser} = useContext(AuthContext)

    const handleLogout = () => {
        if (user) {
            logoutUser()
                .then(() => {
                    toast.success('Logout Successful')
                })
                .catch((error) => {
                    console.error(error.message)
                    toast.error(error.message)
                })
        } else {
            toast.error('user is not Authenticated')
        }
    }

    return (
        <div className='hidden sideNav shadow-lg shadow-gray-400 w-[250px] h-screen fixed top-0 right-0  bg-purple/85 bg-opacity-85 backdrop-blur-lg  flex-col pt-6 transition-all duration-500 '>
            <img onClick={hideSideNav} src={closeIcon} alt='close icon' className='h-8 w-8 ml-4' />

            <div className='h-full flex flex-col items-start justify-center gap-6'>

                <div className='px-4'>
                <ThemeToggler />
                </div>

                {
                    routesCollection?.map(route =>
                        <NavLink
                            key={route.link}
                            to={route.link}
                            className='w-full px-4 py-3 hover:bg-olive'
                        >
                            {route.title}
                        </NavLink>
                    )
                }

                <h3 onClick={handleLogout} className='w-full px-4 py-3 hover:bg-olive'>Logout</h3>
                <NavLink to='/updateProfile' className='w-full px-4 py-3 hover:bg-olive'>Update Profile</NavLink>


            </div>
        </div>
    );
};

SideNavBar.propTypes = {
    hideSideNav: PropTypes.func,
    routesCollection: PropTypes.array
}
export default SideNavBar;