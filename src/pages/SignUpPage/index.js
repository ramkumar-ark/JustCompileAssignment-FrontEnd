import { useContext, useEffect } from 'react';
import { SignUpForm } from '../../components/Forms';
import useAuthentication from '../../hooks/useAuthentication';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const {AuthCtx} = useAuthentication();
    const {signup, user, error} = useContext(AuthCtx);
    const navigate = useNavigate();
    useEffect(
        () => {
            user && navigate('/dashboard');
        },
        [user, navigate]
    );
    return (
        <div className="signup-section">
            <div className='signup-section__image'/>
            <div className='signup-section__content'>
                {error && <div className='error-message'>{error}</div>}
                <SignUpForm signUpFunction={signup}/>
            </div>
        </div>
    );
}