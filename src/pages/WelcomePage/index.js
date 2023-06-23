import { Link } from 'react-router-dom';
import { ButtonNormal } from '../../components/Buttons';
import HeadingMain from '../../components/HeadingMain';
import './index.css';

export default function WelcomePage() {
    return (
        <div className="welcome-section">
            <div className='welcome-section__image'/>
            <div className='welcome-section__content'>
                <div className='welcome-section__content__heading'>
                    <HeadingMain headingText=''/>
                    <HeadingMain headingText=''/>
                </div>
                <div className='welcome-section__content__main'>
                    <h1 className='welcome-heading'>Welcome</h1>
                    <div className='welcome-section__buttons'>
                        <Link to={'signup'}>
                            <ButtonNormal buttonText='Register' onClickFunction={() => {}}/>
                        </Link>
                        <Link to={'login'}>
                            <ButtonNormal buttonText='Login' onClickFunction={() => {}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}