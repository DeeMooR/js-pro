import React, { FC } from "react";
import "./Button.css";

interface ITitle {
    text: string,
    handleClick?: () => void,
    isReboot?: boolean
}

const Button: FC<ITitle> = ({ text, handleClick, isReboot }) => {
    return (
        <button className="custom-button" type={isReboot ? 'button' : undefined} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
