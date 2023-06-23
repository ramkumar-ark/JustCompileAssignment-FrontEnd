import { LoginForm } from '../../components/Forms';
import './index.css';
import { useNavigate } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';
import { useContext, useEffect } from 'react';

export default function LoginPage() {
    const navigate = useNavigate();
    const { AuthCtx } = useAuthentication();
    const {signin, user, error} = useContext(AuthCtx);
    useEffect(
        () => {
            user && navigate("/dashboard")
        },
        [user, navigate]
    )
    return (
        <div className="login-section">
            <div className='login-section__image'/>
            <div className='login-section__content'>
                {error && <div className='error-message'>{error}</div>}
                <LoginForm loginFunction={signin}/>
            </div>
        </div>
    );
}