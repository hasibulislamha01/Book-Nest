import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const ValidateUser = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="mt-12 md:mt-20 flex justify-center items-center">
                <div className="w-40 mx-auto loading loading-spinner text-warning"></div>
            </div>
        )
    }

    else if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={location.pathname}></Navigate>
    );
};

ValidateUser.propTypes = {
    children: PropTypes.node
}

export default ValidateUser;