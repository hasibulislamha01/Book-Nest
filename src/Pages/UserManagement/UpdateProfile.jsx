import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Components/AuthProvider";

const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext)

    const handleUpdateProfile = (event)=> {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const photo = form.photo.value;

        updateUserProfile(userName, photo)
        .then(()=>{
            console.log('user updated ')
        }).catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="min-h-screen px-2 lg:px-56 bg-gray py-24 bg-cover">
            <Toaster></Toaster>
            
            <h1 className="text-center mb-6 text-3xl text-white">Update Profile</h1>

            <form className="flex flex-col items-center justify-center gap-10" onSubmit={handleUpdateProfile}>
                <div className="input-container">
                    <input
                        className=""
                        type="text"
                        name="name"
                        required="required"
                    />
                    <span className="label">Your Name</span>
                </div>
                <div className="relative input-container">
                    <input
                        className=""
                        type='text'
                        name="photo"
                        required="required"
                    />
                    <span className="label">Your Photo</span>
                   
                    <button type="submit" className="btn w-full mt-6">Update</button>
                </div>
            </form>

            
            
        </div>
    );
};

export default UpdateProfile;