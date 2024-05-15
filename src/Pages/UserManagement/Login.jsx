import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Bounce } from "react-awesome-reveal";
import { GoogleAuthProvider } from "firebase/auth";
import { VscGithub } from "react-icons/vsc";
import { GithubAuthProvider } from "firebase/auth";
import axios from "axios";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const { loginUser, loginWithGoogle } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const userEmail = form.email.value;
        const password = form.password.value;
        const loginCredential = { userEmail, password }
        console.log(loginCredential)

        // signing in the user with email and password
        loginUser(userEmail, password)
            .then(async (result) => {
                await axios.post('http://localhost:5000/jwt', { email: result?.user?.email })
                    .then(response => {
                        console.log('token', response.data)
                    })
                // .catch(error){
                //     console.error(error.data)
                // }
                console.log(result?.user)
                toast.success('You have successfully Logged in')
                if (location?.state) {
                    navigate(location.state)
                } else {
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


    // google login
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        loginWithGoogle(googleProvider)
            .then( result => {
                console.log(result.user)
                toast.success('Login Successful')
                if (location?.state) {
                    navigate(location.state)
                } else {
                    navigate('/')
                }
            }).catch(error => {
                console.error(error.message)
                toast.error(error.message)
            })
    }
    // google login
    const githubProvider = new GithubAuthProvider()
    const handleGithubLogin = () => {
        loginWithGoogle(githubProvider)
            .then(result => {
                console.log(result.user)
                toast.success('Login Successful')
                if (location?.state) {
                    navigate(location.state)
                } else {
                    navigate('/')
                }
            }).catch(error => {
                console.error(error.message)
                toast.error(error.message)
            })
    }



    return (
        <div className="min-h-screen px-0 md:px-16 lg:px-56 pt-20 bg-[#1d2b3a] w-full ">
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
            <h1 className="text-center mb-6 text-3xl text-[#34d399]">Login now</h1>

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
                        className="absolute top-[18px] right-[15px] text-white"
                    >
                        {
                            !showPassword ?
                                <BsEye />
                                : <BsEyeSlash />
                        }
                    </span>
                    <button type="submit" className="btn w-full mt-6 bg-[#34d399] border-transparent">Login</button>
                </div>
            </form>

            <div className="mt-24 text-center flex flex-col gap-6 justify-center items-center text-white">
                <h3>login with</h3>
                <div className="flex items-center justify-center gap-6">
                    <span onClick={handleGoogleLogin} className="text-2xl hover:cursor-pointer"><FcGoogle /></span>
                    <span onClick={handleGithubLogin} className="text-2xl hover:cursor-pointer"><VscGithub /></span>
                </div>
            </div>
            <p className="text-center text-white py-12">Do not have an account ?
                <span className=" ml-3 text-[#34d399] ">
                    <Link to='/register'>sign up</Link>
                </span>
            </p>
        </div>
    );
};

export default Login;