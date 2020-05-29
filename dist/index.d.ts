import './index.css';
export declare type eventHandler = (event: any) => void;
export declare type ref = {
    isOpen: boolean;
    title?: string;
    subtitle?: string;
    onRequestClose?: eventHandler;
    onAfterOpen?: eventHandler;
    children?: any;
    className?: string;
    overlayClassName?: string;
    closeIcon?: any;
    $from?: any;
    width?: any;
    shouldCloseOnEsc?: boolean;
    from?: any;
};
export declare const ReactSlidingPane: ({ isOpen, title, subtitle, onRequestClose, onAfterOpen, children, className, overlayClassName, closeIcon, from, width, shouldCloseOnEsc }: ref) => any;
export declare const IconClose: () => any;
