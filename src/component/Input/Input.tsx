import './Input.css';

export default function Input({className, ...other}:Partial<JSX.IntrinsicElements['input']>){
    return (
        <input className={`input ${className}`} {...other}/>
    );
}
