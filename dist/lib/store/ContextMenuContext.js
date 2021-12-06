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
function contextMenuReducer(state, action) {
    switch (action.type) {
        case "SET_VISIBILITY":
            return __assign(__assign({}, state), { isVisible: action.isVisible });
        case "TOGGLE_VISIBILITY":
            return __assign(__assign({}, state), { isVisible: !state.isVisible });
        case "SET_REMOVE_CALLBACK":
            return __assign(__assign({}, state), { removeCurrentContextMenu: action.removeCurrentContextMenu });
        default:
            throw new Error("Unhandled action");
    }
}
export { contextMenuReducer };
//# sourceMappingURL=ContextMenuContext.js.map