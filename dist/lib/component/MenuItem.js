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
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../util/useWindowDimensions";
import MenuContainer from "./MenuContainer";
export default function MenuItem(props) {
    var _a = useState(false), submenuVisibility = _a[0], setSubmenuVisibility = _a[1];
    var _b = useState({
        h: "right",
        v: "bottom",
    }), submenuDirection = _b[0], setSubMenuDirection = _b[1];
    var submenuRef = useRef(null);
    var itemRef = useRef(null);
    var viewport = useWindowDimensions();
    useEffect(function () {
        var _a, _b, _c, _d;
        if (submenuRef.current !== undefined && itemRef.current !== undefined) {
            var mcRight = ((_a = itemRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().right) || 0;
            var mcTop = ((_b = itemRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().top) || 0;
            var submenuWidht = ((_c = submenuRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().width) || 0;
            var submenuHeight = ((_d = submenuRef.current) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().height) || 0;
            var calcSubmenuHDirection = viewport.width - mcRight - submenuWidht < 8 ? "left" : "right";
            var calcSubmenuVDirection = viewport.height - mcTop - submenuHeight < 0 ? "top" : "bottom";
            setSubMenuDirection({
                h: calcSubmenuHDirection,
                v: calcSubmenuVDirection,
            });
        }
    }, [submenuVisibility]);
    return (_jsx("li", __assign({ className: "context-menu-item", role: "none", ref: itemRef }, { children: _jsxs("div", __assign({ className: "context-menu-item-button", role: "menuitem", "aria-disabled": props.item.disabled, onClick: props.item.handleClick, onMouseEnter: function () {
                return setSubmenuVisibility(Array.isArray(props.item.submenu) && props.item.disabled !== true);
            }, onMouseLeave: function () { return setSubmenuVisibility(false); } }, { children: [_jsx("span", __assign({ className: "context-menu-item-icon" }, { children: props.item.icon }), void 0), _jsx("span", __assign({ className: "context-menu-item-name" }, { children: props.item.name }), void 0), _jsx("span", __assign({ className: "context-menu-item-info" }, { children: props.item.submenu && (_jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z", fill: "currentColor" }, void 0) }), void 0)) }), void 0), props.item.submenu && (_jsx(MenuContainer, { mRef: submenuRef, item: props.item.submenu, visibility: submenuVisibility, direction: submenuDirection }, void 0))] }), void 0) }), void 0));
}
//# sourceMappingURL=MenuItem.js.map