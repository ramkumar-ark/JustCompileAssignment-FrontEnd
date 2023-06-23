import React, {useState, createContext} from "react";
import login from "../service/login";
import register from "../service/register";
import verifyAuth from "../service/verifySecret";

const AuthCtx = createContext();

const validateSession = async(token) => {
    try {
        await verifyAuth(token);
        return true;    
    } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return false;
    }
};

const initUser = () => {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("userName");
    if ((token && user) && validateSession(token)) return user;
    return null;
};

const useAuthentication = () => {
    const [user, setUser] = useState(initUser);
    const [ error, setError ] = useState(null);
    const signup = ({name, email, password}) => {
        register({name, email, password})
            .then(({user, token}) => {
                localStorage.setItem('userName', user);
                localStorage.setItem('token', token);
                setUser(user);
                setError(null);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setUser(null);
            });
    }
    const signin = ({userName, password}) => {
        login({userName, password})
            .then(({user, token}) => {
                localStorage.setItem('userName', user);
                localStorage.setItem('token', token);
                setUser(user);
                setError(null);
            })
            .catch((error) => {
                setError(error);
                setUser(null);
            });
    }

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setUser(null);
        setError(null);
    };

    return {
        AuthCtx,
        AuthProvider: ({children}) => (
            <AuthCtx.Provider value={{error, user, signup, signin, logOut}}>
                {children}
            </AuthCtx.Provider>
        )
    };
};

export default useAuthentication;