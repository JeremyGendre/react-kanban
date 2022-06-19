import {PropsWithChildren} from "react";
import './Button.css';

interface ButtonProps extends Partial<JSX.IntrinsicElements['button']>{
    small?: boolean
}

export default function Button({children, small, className, ...other}:PropsWithChildren<ButtonProps>){
    return (
        <button className={`button ${small ? 'button-small' : ''} ${className}`} {...other}>
            {children}
        </button>
    );
}
