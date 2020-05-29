import React from 'react';
import Modal from 'react-modal';
import './index.css.js';

var CLOSE_TIMEOUT = 500;
var ReactSlidingPane = function (_a) {
    var isOpen = _a.isOpen, title = _a.title, subtitle = _a.subtitle, onRequestClose = _a.onRequestClose, onAfterOpen = _a.onAfterOpen, children = _a.children, className = _a.className, overlayClassName = _a.overlayClassName, closeIcon = _a.closeIcon, _b = _a.from, from = _b === void 0 ? 'right' : _b, width = _a.width, shouldCloseOnEsc = _a.shouldCloseOnEsc;
    var directionClass = "slide-pane_from_".concat(from);
    return React.createElement(Modal, { className: "slide-pane ".concat(directionClass, " ").concat(className || ''), style: { content: { width: width || '80%' } }, overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ''), closeTimeoutMS: CLOSE_TIMEOUT, isOpen: isOpen, shouldCloseOnEsc: shouldCloseOnEsc, onAfterOpen: onAfterOpen, onRequestClose: onRequestClose, contentLabel: "Modal \"".concat(title || '', "\"") },
        React.createElement("div", { className: "slide-pane__header" },
            React.createElement("div", { className: "slide-pane__close", onclick: onRequestClose }, closeIcon || React.createElement(IconClose, null)),
            React.createElement("div", { className: "slide-pane__title-wrapper" },
                React.createElement("h2", { className: "slide-pane__title" }, title),
                React.createElement("div", { className: "slide-pane__subtitle" }, subtitle))),
        React.createElement("div", { className: "slide-pane__content" }, children));
};
var IconClose = function () {
    return React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 13 22" },
        React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z" }));
};
//export default ReactSlidingPane;

export { IconClose, ReactSlidingPane };
