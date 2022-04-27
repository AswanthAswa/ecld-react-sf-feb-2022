import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Requireauth = ({ children }) => {
    const auth = useAuth()

     if(!auth.user){
         return(
            <Navigate to='/Login'/>
        )
     }
    return children
}