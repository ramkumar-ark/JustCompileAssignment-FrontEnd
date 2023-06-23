import './index.css';

export function ButtonNormal({buttonText, onClickFunction}) {
    return <button className="btn button--normal" onClick={onClickFunction}>{buttonText}</button>
}

export function Button1({buttonText, onClickFunction}) {
    return <button className="btn button--1" onClick={onClickFunction}>{buttonText}</button>
}
