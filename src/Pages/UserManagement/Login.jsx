import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Bounce } from "react-awesome-reveal";

const Login = () => {
    const location= useLocation()
    const navigate = useNavigate()
    console.log(location)
    const { loginUser } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const userEmail = form.email.value;
        const password = form.password.value;
        const loginCredential = { userEmail, password }
        console.log(loginCredential)

        // signing in the user with email and password
        loginUser(userEmail, password)
            .then((result) => {
                console.log(result.user)
                toast.success('You have successfully Logged in')
                if(location?.state){
                    navigate(location.state)
                }else{
                    navigate('/')
                }
            })
            .catch((error) => {
                console.error(error.message)
                toast.error(error.message)
            })
    }


    // toggle password type
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    

    return (
        <div className="container mx-auto px-56 mt-12">
            <Toaster></Toaster>
            {
                location?.state ?
                    <div className='mb-4'>
                        <Bounce>
                            <p className="text-amber-500 text-center text-xl">You have to Login first to proceed</p>
                        </Bounce>
                    </div>
                    : <></>
            }
            <h1 className="text-center mb-6 text-3xl text-violet-600">Login now</h1>

            <form className="flex flex-col items-center justify-center gap-10" onSubmit={handleLogin}>
                <div className="input-container">
                    <input
                        className=""
                        type="email"
                        name="email"
                        required="required"
                    />
                    <span className="label">Email</span>
                </div>
                <div className="relative input-container">
                    <input
                        className=""
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        required="required"
                    />
                    <span className="label">Password</span>
                    <span
                        onClick={toggleShowPassword}
                        className="absolute top-[18px] right-[15px]"
                    >
                        {
                            !showPassword ?
                                <BsEye />
                                : <BsEyeSlash />
                        }
                    </span>
                    <button type="submit" className="btn w-full mt-6">Login</button>
                </div>
            </form>

            <div className="mt-24 text-center flex flex-col justify-center items-center">
                <h3>login with</h3>
                <span className="text-2xl hover:cursor-pointer"><FcGoogle /></span>
            </div>
            <p className="text-center">Do not have an account ?
                <span className="text-purple-700">
                    <Link to='/register'>sign up</Link>
                </span>
            </p>
        </div>
    );
};

export default Login;