import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ThemeToggler from "./UI/ThemeToggler";

const Drawer = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const image = user? user?.photoURL : 'avatar.gif';
    const navigate = useNavigate()
    console.log(user?.photoURL)

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

    const popUp = () => {
        Swal.fire({
            title: "Are You Sure to Logout?",
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: "Logout",
            denyButtonText: `Stay in touch`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                handleLogout()
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const logButton = user ? 'Logout' : 'Login';
    const handleLogButton = () => {
        if (user) {
            popUp()
            navigate('/')
        }
        else {
            navigate('/login')
        }
    }


    return (
        <div className="flex items-center gap-2">
           
            <ThemeToggler/>

            <div className="dropdown dropdown-hover dropdown-end relative">
                <div tabIndex={0} role="button" className="opacity-70">
                    <img className="w-8 h-8 rounded-full object-cover hidden md:block" src={image} alt="user image" />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>{user?.displayName}</a></li>
                    <li><a onClick={handleLogButton}>{logButton}</a></li>
                    <li><Link className={user?'inline-block' : 'hidden'} to='/updateProfile'>Update Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;