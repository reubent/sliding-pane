import React from 'react';
import Modal from 'react-modal';
import './index.css'

const CLOSE_TIMEOUT = 500;

export type eventHandler = (event: any) => void

export type ref = {
    isOpen: boolean
    title?: string
    subtitle?: string
    onRequestClose?: eventHandler
    onAfterOpen?: eventHandler
    children?: any
    className?: string
    overlayClassName?: string
    closeIcon?: any
    $from?: any
    width?: any
    shouldCloseOnEsc?: boolean
    from? : any
}

export const ReactSlidingPane = (
    {
        isOpen, title, subtitle, onRequestClose, onAfterOpen, children, className, overlayClassName,
        closeIcon, from = 'right', width, shouldCloseOnEsc
    }: ref
) => {
    const directionClass = "slide-pane_from_".concat(from);

    return <Modal
        className={"slide-pane ".concat(directionClass, " ").concat(className || '')}
        style={{content: {width: width || '80%'}}}
        overlayClassName={"slide-pane__overlay ".concat(overlayClassName || '')}
        closeTimeoutMS={CLOSE_TIMEOUT}
        isOpen={isOpen}
        shouldCloseOnEsc={shouldCloseOnEsc}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        contentLabel={"Modal \"".concat(title || '', "\"")}
    >
        <div className="slide-pane__header">
            <div className="slide-pane__close" onclick={onRequestClose}>
                {closeIcon || <IconClose/>}
            </div>
            <div className="slide-pane__title-wrapper">
                <h2 className="slide-pane__title">{title}</h2>
                <div className="slide-pane__subtitle">{subtitle}</div>
            </div>
        </div>
        <div className="slide-pane__content">
            {children}
        </div>
    </Modal>
}

export const IconClose = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 22">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z">
        </path>
    </svg>
}

//export default ReactSlidingPane;
