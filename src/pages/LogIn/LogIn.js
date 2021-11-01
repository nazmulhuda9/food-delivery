import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const { signInWithGoogle, setUser, setIsLoading, } = useAuth();
    let history = useHistory();
    let location = useLocation();
    const url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle().then(res => {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
        })

            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div className="text-center m-5 p-5">
            <h1 className="p-3">Log in please..</h1>
            <button onClick={handleGoogleLogin}>google sign in</button>
        </div>
    );
};

export default LogIn;