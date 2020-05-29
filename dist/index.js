"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconClose = exports.ReactSlidingPane = void 0;
var react_1 = require("react");
var react_modal_1 = require("react-modal");
require("./index.css");
var CLOSE_TIMEOUT = 500;
exports.ReactSlidingPane = function (_a) {
    var isOpen = _a.isOpen, title = _a.title, subtitle = _a.subtitle, onRequestClose = _a.onRequestClose, onAfterOpen = _a.onAfterOpen, children = _a.children, className = _a.className, overlayClassName = _a.overlayClassName, closeIcon = _a.closeIcon, _b = _a.from, from = _b === void 0 ? 'right' : _b, width = _a.width, shouldCloseOnEsc = _a.shouldCloseOnEsc;
    var directionClass = "slide-pane_from_".concat(from);
    return react_1.default.createElement(react_modal_1.default, { className: "slide-pane ".concat(directionClass, " ").concat(className || ''), style: { content: { width: width || '80%' } }, overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ''), closeTimeoutMS: CLOSE_TIMEOUT, isOpen: isOpen, shouldCloseOnEsc: shouldCloseOnEsc, onAfterOpen: onAfterOpen, onRequestClose: onRequestClose, contentLabel: "Modal \"".concat(title || '', "\"") },
        react_1.default.createElement("div", { className: "slide-pane__header" },
            react_1.default.createElement("div", { className: "slide-pane__close", onclick: onRequestClose }, closeIcon || react_1.default.createElement(exports.IconClose, null)),
            react_1.default.createElement("div", { className: "slide-pane__title-wrapper" },
                react_1.default.createElement("h2", { className: "slide-pane__title" }, title),
                react_1.default.createElement("div", { className: "slide-pane__subtitle" }, subtitle))),
        react_1.default.createElement("div", { className: "slide-pane__content" }, children));
};
exports.IconClose = function () {
    return react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 13 22" },
        react_1.default.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z" }));
};
//export default ReactSlidingPane;
