
import SideNavBar from './SideNavBar';
import HorizontalNav from './HorizontalNav';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';

const routesCollection = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'All Books',
        link: '/allBooks'
    },
    {
        title: 'Add Books',
        link: '/addBooks'
    },
]

const MainNav = () => {

    const { user } = useContext(AuthContext)

    const hideSideNav = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('flex')
        sideNav.classList.add('hidden')
    }

    const openSideNav = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('hidden')
        sideNav.classList.add('flex')
    }
    return (
        <nav id="navContainer" className="w-full z-10 mono font-bold fixed top-0 bg-purple dark:bg-ash">
            <div className='container mx-auto'>



                {/* horizontal navbar ( visible in medium and large device ) */}
                <HorizontalNav
                    routesCollection={routesCollection}
                    openSideNav={openSideNav}
                    user={user}
                ></HorizontalNav>



                {/* vertical navbar ( visible in mobiles ) */}

                <SideNavBar
                    routesCollection={routesCollection}
                    hideSideNav={hideSideNav}
                ></SideNavBar>


            </div>
        </nav>
    );
};

export default MainNav;