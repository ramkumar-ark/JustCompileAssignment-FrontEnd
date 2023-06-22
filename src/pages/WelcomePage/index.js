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
                        <ButtonNormal buttonText='Register' onClickFunction={() => {}}/>
                        <ButtonNormal buttonText='Login' onClickFunction={() => {}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}