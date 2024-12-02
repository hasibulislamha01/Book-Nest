import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [registrationError, setRegistrationError] = useState(null)

    const handleRegister = (event) => {
        event.preventDefault()
        setRegistrationError(null)
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const userName = firstName + " " + lastName;
        // console.log(userName)
        const userPhoto = form.photo.value;
        const userEmail = form.email.value;
        const password = form.password.value;

        // validation
        if (password.length < 6) {
            setRegistrationError('Password must have at least 6 characters')
            return;
        }
        else if (! /[A-Z]/.test(password)) {
            setRegistrationError("PassWord must have at least one uppercase letter")
            return;
        }
        else if (! /[a-z]/.test(password)) {
            setRegistrationError("PassWord must contain at least one lowercase letter")
            return;
        }

        else {
            // creating / registering user with email and password
            createUser(userEmail, password)
                .then((result) => {
                    console.log('Successfull creation of user: ', result.user)

                    // Updating the user with userName and user photo
                    updateUserProfile(userName, userPhoto)
                        .then(() => {
                            console.log('Updated user successfully')
                        }).catch((error) => {
                            console.error("Updated failure: ", error.message)
                        });

                    toast.success('Registration Successful')

                })
                .catch((error) => {
                    console.error("failure to create user: ", error.message)
                    setRegistrationError(error.message)
                })
        }

    }

    // showing error message if registration was not successfull
    if (registrationError) {
        toast.error({ registrationError })
    }

    // toggle Password type 
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="pt-28 bg-[#1d2b3a] min-h-screen flex flex-col justify-center">
            <Toaster></Toaster>
            <h1 className="text-center text-3xl mb-6 text-[#34d399]">Register Here</h1>
            <form className="space-y-4  px-2  md:px-16 lg:px-80" onSubmit={handleRegister}>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="input-container mx-auto">
                        <input
                            className=""
                            type="text"
                            name="firstName"
                            required="required"
                        />
                        <label className="label">First Name</label>
                    </div>
                    <div className="input-container mx-auto">
                        <input
                            className=""
                            type="text"
                            name="lastName"
                            required="required"
                        />
                        <label className="label">Last Name</label>
                    </div>
                </div>
                <div className="mx-auto input-container" id="big-input">
                    <input
                        className="w-full"
                        type="text"
                        name="photo"
                        required="required"
                    />
                    <label className="label">Your Photo</label>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full input-container mx-auto">
                        <input
                            className=""
                            type="email"
                            name="email"
                            required="required"
                        />
                        <label className="label">Email</label>
                    </div>
                    <div className="w-full relative input-container mx-auto">
                        <input
                            className=""
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            required="required"
                        />
                        <label className="label">Password</label>
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
                </div>
                <div className="mx-auto w-fit lg:w-full">

                    <button type="submit" className="btn w-44 lg:btn-block mt-4 bg-[#34d399] border-transparent text-neutral hover:text-lavender transition-all duration-500">Register</button>

                </div>
            </form>
            <div className="py-12">
                <p className="mt-6 text-center text-white">Already have an account ?
                    <span className=" ml-3 text-[#34d399] ">
                        <Link to='/login'>sign in</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;