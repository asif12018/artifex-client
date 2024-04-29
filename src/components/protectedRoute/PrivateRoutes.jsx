import { useContext, useState } from "react";
import { AuthContext } from './../provider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    //state to redirect to login page
    const [redirect, setRedirect] = useState(false);
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

     //condition to delay redirect
     if(!user){
        setTimeout(()=>{
            setRedirect(true);
        },400)
    }
    return (
        <>
          {
            redirect || <div className="h-screen flex justify-center items-center ">
                <BounceLoader></BounceLoader>
            </div>
        }
         {
             redirect && <Navigate to={'/login'} state={location.pathname}></Navigate>
         }
        </>
    );
};

export default PrivateRoutes;