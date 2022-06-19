import {PropsWithChildren} from "react";
import './Button.css';

export default function Button({children, className, ...other}:PropsWithChildren<Partial<JSX.IntrinsicElements['button']>>){
    return (
        <button className={`button ${className}`} {...other}>
            {children}
        </button>
    );
}
