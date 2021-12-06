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
import { createContext, useContext, useReducer } from "react";
import { contextMenuReducer, } from "./store/ContextMenuContext";
var ContextMenuStateContext = createContext({
    isVisible: false,
    removeCurrentContextMenu: function () { },
});
var ContextMenuDispatchContext = createContext(function () { return null; });
function ContextMenuProvider(_a) {
    var children = _a.children;
    var _b = useReducer(contextMenuReducer, {
        isVisible: false,
        removeCurrentContextMenu: function () { },
    }), state = _b[0], dispatch = _b[1];
    return (_jsx(ContextMenuStateContext.Provider, __assign({ value: state }, { children: _jsx(ContextMenuDispatchContext.Provider, __assign({ value: dispatch }, { children: children }), void 0) }), void 0));
}
function useContextMenuState() {
    var state = useContext(ContextMenuStateContext);
    if (!state)
        throw new Error("Cannot find SampleProvider");
    return state;
}
function useContextMenuDispatch() {
    var dispatch = useContext(ContextMenuDispatchContext);
    if (!dispatch)
        throw new Error("Cannot find SampleProvider");
    return dispatch;
}
function useContextMenu() {
    var state = useContextMenuState();
    var dispatch = useContextMenuDispatch();
    return [state, dispatch];
}
export default ContextMenuProvider;
export { useContextMenu, useContextMenuState, useContextMenuDispatch };
//# sourceMappingURL=Provider.js.map