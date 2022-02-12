import style from "./Button.module.css";
import React from "react";


const Button: React.FC<{ isDisable: boolean }> = ({isDisable = false, children}) => {


    return (
        <button className={style.button} disabled={isDisable}>
            {children}
        </button>
    )
}

export default Button