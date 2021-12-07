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
import { useState } from "react";
import MenuGroup from "./component/MenuGroup";
import "./style/ContextMenu.css";
import { useContextMenu } from "./Provider";
function drawContextMenu(menu) {
    return menu.map(function (menuGroup, index) { return (_jsx(MenuGroup, { item: menuGroup }, "MenuGroup-".concat(index))); });
}
function ContextMenu(_a) {
    var children = _a.children, menu = _a.menu;
    var _b = useContextMenu(), contextMenu = _b[0], dispatchContextMenu = _b[1];
    var _c = useState(false), visible = _c[0], setVisible = _c[1];
    var _d = useState({ x: 0, y: 0 }), position = _d[0], setPsition = _d[1];
    function contextMenuHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        hideContextMenu();
        showContextMenu();
        setPsition({ x: event.pageX, y: event.pageY });
        return false;
    }
    var showContextMenu = function () {
        dispatchContextMenu({ type: "SET_VISIBILITY", isVisible: true });
        dispatchContextMenu({
            type: "SET_REMOVE_CALLBACK",
            removeCurrentContextMenu: disableThisCM,
        });
        setVisible(true);
    };
    var disableThisCM = function () { return setVisible(false); };
    var hideContextMenu = function () {
        contextMenu.removeCurrentContextMenu();
        dispatchContextMenu({ type: "SET_VISIBILITY", isVisible: false });
        setVisible(false);
    };
    return (_jsxs("div", __assign({ onContextMenu: contextMenuHandler }, { children: [children, _jsx("div", __assign({ className: "context-menu", "data-visibility": contextMenu.isVisible && visible, onClick: hideContextMenu, style: {
                    left: position.x,
                    top: position.y,
                } }, { children: drawContextMenu(menu) }), void 0)] }), void 0));
}
export { ContextMenu, drawContextMenu };
//# sourceMappingURL=ContextMenu.js.map