import './index.css';
import { ButtonNormal } from '../Buttons';

export function SignUpForm({signUpFunction}) {
    return (
        <form 
            className='form signup-form'
            onSubmit={(event) => {
                event.preventDefault();
                const formCollection = event.target.elements;
                const formData = {
                    name: formCollection.userName.value,
                    email: formCollection.email.value,
                    password: formCollection.password.value,
                };
                // send the form data to server
                signUpFunction(formData);
            }}
        >
            <input 
                type='text' 
                minLength={3} 
                maxLength={12} 
                placeholder='Username' 
                name='userName'    
                required
            />
            <input type='email' placeholder='Email' name='email' required/>
            <input 
                type='password' 
                placeholder='Password' 
                required 
                minLength={6} 
                maxLength={12}
                name='password'
            />
            <ButtonNormal buttonText='SignUp'/>
        </form>
    );
}

export function LoginForm({loginFunction}) {
    return (
        <form 
            className='form signup-form'
            onSubmit={(event) => {
                event.preventDefault();
                const formCollection = event.target.elements;
                const formData = {
                    userName: formCollection.userName.value,
                    password: formCollection.password.value,
                };
                loginFunction(formData);
            }}
        >
            <input type='text' placeholder='Username' name='userName' required/>
            <input type='password' placeholder='Password' required name='password'/>
            <ButtonNormal buttonText='Login'/>
        </form>
    );
}