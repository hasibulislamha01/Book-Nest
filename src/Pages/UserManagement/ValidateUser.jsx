import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider";

const ValidateUser = () => {
    const {user} = useContext(AuthContext)
    if(user){
        console.log('no user')
    }
    return (
        <div>
            
        </div>
    );
};

export default ValidateUser;