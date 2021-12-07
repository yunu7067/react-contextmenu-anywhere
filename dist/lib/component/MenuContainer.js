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
import { drawContextMenu } from "../ContextMenu";
export default function MenuContainerIn(props) {
    return (_jsx("div", __assign({ ref: props.mRef, className: "context-menu", "data-v-direction": props.direction.v, "data-h-direction": props.direction.h }, { children: drawContextMenu(props.item) }), void 0));
}
//# sourceMappingURL=MenuContainer.js.map