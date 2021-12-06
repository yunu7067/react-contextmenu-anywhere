var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { drawContextMenu } from "../ContextMenu";
export default function MenuItem(props) {
    return (_jsx("li", __assign({ className: "context-menu-item", role: "none" }, { children: _jsxs("div", __assign({ className: "context-menu-item-button", role: "menuitem", "aria-disabled": props.item.disabled, onClick: props.item.handleClick }, { children: [_jsx("span", __assign({ className: "context-menu-item-icon" }, { children: props.item.icon }), void 0), _jsx("span", __assign({ className: "context-menu-item-name" }, { children: props.item.name }), void 0), _jsx("span", __assign({ className: "context-menu-item-info" }, { children: props.item.submenu && (_jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z", fill: "currentColor" }, void 0) }), void 0)) }), void 0), props.item.submenu && (_jsx("div", __assign({ className: "context-menu", "data-direction": "right" }, { children: drawContextMenu(props.item.submenu) }), void 0))] }), void 0) }), void 0));
}
//# sourceMappingURL=MenuItem.js.map