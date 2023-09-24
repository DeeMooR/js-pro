import React, { FC } from "react";
import "./Button.css";

interface ITitle {
    text: string,
    handleClick?: () => void,
    style?: string,
    isReboot?: boolean
}

const Button: FC<ITitle> = ({ text, handleClick, style, isReboot }) => {
    return (
        <button className={`custom-button ${style}`} type={isReboot ? 'button' : undefined} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
