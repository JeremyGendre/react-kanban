import {PropsWithChildren} from "react";
import './Button.css';

interface ButtonProps extends Partial<JSX.IntrinsicElements['button']>{
    small?: boolean;
    uncolored?: boolean;
    iconButton?: boolean;
}

export default function Button({children, small, uncolored, iconButton, className, ...other}:PropsWithChildren<ButtonProps>){
    return (
        <button className={`button ${small ? 'button-small' : ''} ${uncolored ? 'button-uncolored' : ''} ${iconButton ? 'button-icon' : ''} ${className}`} {...other}>
            {children}
        </button>
    );
}
