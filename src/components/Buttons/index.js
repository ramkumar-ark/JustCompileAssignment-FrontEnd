import './index.css';

export function ButtonNormal({buttonText, onClickFunction}) {
    return <button className="button--normal" onClick={onClickFunction}>{buttonText}</button>
}
