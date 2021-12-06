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
import { jsx as _jsx } from "react/jsx-runtime";
import MenuItem from "./MenuItem";
export default function MenuGroup(props) {
    return (_jsx("ul", __assign({ className: "context-menu-group" }, { children: props.item.map(function (menuItem, index) { return (_jsx(MenuItem, { item: menuItem }, "MenuItem-".concat(index))); }) }), void 0));
}
//# sourceMappingURL=MenuGroup.js.map