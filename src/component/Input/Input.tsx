import './Input.css';
import {ForwardedRef, forwardRef} from "react";

const Input = forwardRef<HTMLInputElement,Partial<JSX.IntrinsicElements['input']>>(({className, ...other}, ref) => (
    <input ref={ref} className={`input ${className}`} {...other}/>
));

export default Input;
