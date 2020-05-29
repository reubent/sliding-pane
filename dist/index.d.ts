declare module 'react-sliding-pane'

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
    shouldCloseOnEsc: boolean
}

export function ReactSlidingPane(_ref: ref);