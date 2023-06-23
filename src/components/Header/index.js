import { Button1 } from '../Buttons';
import './index.css';
import useAuthentication from '../../hooks/useAuthentication';
import { useContext } from 'react';

export default function Header() {
    const {AuthCtx} = useAuthentication();
    const {user, logOut} = useContext(AuthCtx);
    return (
        <div className="header">
            {user &&
                <>
                    <h1>Welcome, {user.toUpperCase()}</h1>
                    <Button1 buttonText='Logout' onClickFunction={logOut}/>
                </>
            }
            
        </div>
    );
}