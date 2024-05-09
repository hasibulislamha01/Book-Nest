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
                .then((result) => {
                    console.log('Updated user: ',result.user)
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
        <div className="container mx-auto mt-12 px-48">
            <Toaster></Toaster>
            <h1 className="text-center text-3xl mb-6">Register Here</h1>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div className="flex justify-between gap-4">
                    <div>
                        <label className="px-3 py-2">First Name</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            name="firstName"
                            placeholder="First Name"

                        />
                    </div>
                    <div>
                        <label className="px-3 py-2">Last Name</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"

                        />
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <label className="px-3 py-2">Your Photo</label>
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="photo"
                        placeholder="Enter Your Photo URL"

                    />
                </div>
                <div className="flex justify-between gap-4">
                    <div className="w-full">
                        <label className="px-3 py-2">Email</label>
                        <input
                            className="input input-bordered w-full"
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"

                        />
                    </div>
                    <div className="w-full relative">
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
                </div>
                <button type="submit" className="btn btn-block mt-4">Register</button>
            </form>
            <p>Already have an account ?
                <span className="text-purple-700">
                    <Link to='/login'>sign in</Link>
                </span>
            </p>
        </div>
    );
};

export default Register;