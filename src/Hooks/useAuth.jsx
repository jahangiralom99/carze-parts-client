import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const authProvide = useContext(AuthContext)
    return authProvide;
};

export default useAuth;