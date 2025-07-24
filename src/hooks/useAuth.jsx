import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"



const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;         // returns an object: { user, loading, isAdmin, isAdminLoading }
}


export default useAuth;