import React from 'react';
import Modal from 'react-modal';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".slide-pane {\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  min-width: 100px;\n  height: 100%;\n  box-shadow: 0 8px 8px rgba(0,0,0,0.5);\n  transition: transform 0.5s;\n  will-change: transform;\n}\n.slide-pane:focus {\n  outline-style: none;\n}\n.slide-pane_from_right {\n  margin-left: auto;\n  transform: translateX(100%);\n}\n.slide-pane_from_right.ReactModal__Content--after-open {\n  transform: translateX(0%);\n}\n.slide-pane_from_right.ReactModal__Content--before-close {\n  transform: translateX(100%);\n}\n.slide-pane_from_left {\n  margin-right: auto;\n  transform: translateX(-100%);\n}\n.slide-pane_from_left.ReactModal__Content--after-open {\n  transform: translateX(0%);\n}\n.slide-pane_from_left.ReactModal__Content--before-close {\n  transform: translateX(-100%);\n}\n.slide-pane_from_bottom {\n  height: 90vh;\n  margin-top: 10vh;\n  transform: translateY(100%);\n}\n.slide-pane_from_bottom.ReactModal__Content--after-open {\n  transform: translateY(0%);\n}\n.slide-pane_from_bottom.ReactModal__Content--before-close {\n  transform: translateY(100%);\n}\n.slide-pane__overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: rgba(0,0,0,0);\n}\n.slide-pane__overlay.ReactModal__Overlay--after-open {\n  background-color: rgba(0,0,0,0.3);\n  transition: background-color 0.5s;\n}\n.slide-pane__overlay.ReactModal__Overlay--before-close {\n  background-color: rgba(0,0,0,0);\n}\n.slide-pane__header {\n  display: flex;\n  flex: 0 0 64px;\n  align-items: center;\n  background: #ebebeb;\n  height: 64px;\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n.slide-pane__title-wrapper {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-left: 32px;\n  min-width: 0;\n}\n.slide-pane .slide-pane__title {\n  font-size: 18px;\n  font-weight: normal;\n  max-width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n  padding: 0;\n}\n.slide-pane__close {\n  margin-left: 24px;\n  padding: 16px;\n  opacity: 0.7;\n  cursor: pointer;\n}\n.slide-pane__close svg {\n  width: 12px;\n  padding: 0;\n}\n.slide-pane__content {\n  position: relative;\n  overflow-y: auto;\n  padding: 24px 32px;\n  flex: 1 1 auto;\n}\n.slide-pane__subtitle {\n  font-size: 12px;\n  margin-top: 2px;\n}\n";
styleInject(css);

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
