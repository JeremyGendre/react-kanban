import {PropsWithChildren, useEffect, useRef, useState} from "react";
import './Modal.css';
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";
import {useClickAway} from "../../hook/useClickAway";

export interface ModalContentProps{
    onClose: () => void;
}

export interface ModalProps extends ModalContentProps{
    opened: boolean;
}

export default function Modal(props: PropsWithChildren<ModalProps>){
    const [opened, setOpened] = useState(props.opened);
    useEffect(() => {
        setOpened(props.opened);
    }, [props.opened]);

    if(!opened) return null;

    return <ModalContent onClose={props.onClose}>{props.children}</ModalContent>;
}

function ModalContent(props: PropsWithChildren<ModalContentProps>){
    const modalRef = useRef<HTMLDivElement>(null);
    useClickAway(modalRef, props.onClose);
    return (
        <div className="modal-container">
            <div ref={modalRef} className="modal">
                <Button className="modal-close-btn" title="Delete this column" uncolored small iconButton onClick={props.onClose}>
                    <DeleteIcon className="my-auto" style={{width:'1.2em'}}/>
                </Button>
                {props.children}
            </div>
        </div>
    );
}
