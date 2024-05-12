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

        // creating / registering user with email and password
        createUser(userEmail, password)
            .then((result) => {
                console.log('Successfull creation of user: ',result.user)
                
                // Updating the user with userName and user photo
                updateUserProfile(userName, userPhoto)
                .then(() => {
                    console.log('Updated user successfully')
                  }).catch((error) => {
                    console.error("Updated failure: ",error.message)
                  });

                toast.success('Registration Successful')

            })
            .catch((error) => {
                console.error("failure to create user: ",error.message)
                setRegistrationError(error.message)
            })

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
        <div className="pt-12 px-80 bg-[#1d2b3a]">
            <Toaster></Toaster>
            <h1 className="text-center text-3xl mb-6">Register Here</h1>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div className="flex justify-between gap-4">
                    <div className="input-container">
                        <input
                            className=""
                            type="text"
                            name="firstName"
                            required="required"
                        />
                        <label className="label">First Name</label>
                    </div>
                    <div className="input-container">
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
                <div className="flex justify-between gap-4">
                    <div className="w-full input-container">
                        <input
                            className=""
                            type="email"
                            name="email"
                            required="required"
                        />
                        <label className="label">Email</label>
                    </div>
                    <div className="w-full relative input-container">
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
                <button type="submit" className="btn btn-block mt-4">Register</button>
            </form>
            <p className="mt-6 text-center">Already have an account ?
                <span className="text-purple-700 ml-2">
                    <Link to='/login'>sign in</Link>
                </span>
            </p>
        </div>
    );
};

export default Register;