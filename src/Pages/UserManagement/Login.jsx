import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {

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
        <div className="container mx-auto w-2/5 mt-12">
            <Toaster></Toaster>
            <h1 className="text-center text-3xl text-violet-600">Login now</h1>

            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="px-3 py-2">Email</label>
                    <input
                        className="input input-bordered w-full"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"

                    />
                </div>
                <div className="relative">
                    <label className="px-3">Password</label>
                    <input
                        className="input input-bordered w-full"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter Password"

                    />
                    <span
                        onClick={toggleShowPassword}
                        className="absolute right-5 bottom-[15px]"
                    >
                        {
                            !showPassword ?
                                <BsEye />
                                : <BsEyeSlash />
                        }
                    </span>
                </div>
                <button type="submit" className="btn btn-block mt-2">Login</button>
            </form>
            <p>Do not have an account ?
                <span className="text-purple-700">
                    <Link to='/register'>sign up</Link>
                </span>
            </p>
            <div className="mt-8 text-center">
                <h3>login with</h3>
                <span className="text-3xl hover:cursor-pointer"><FcGoogle /></span>
            </div>
        </div>
    );
};

export default Login;