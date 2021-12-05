import React, { useState } from "react";
import "./ContextMenu.css";
var ContextMenu = function (_a) {
    var children = _a.children;
    var _b = useState(false), showContextMenu = _b[0], setShowContextMenu = _b[1];
    var _c = useState({ x: 0, y: 0 }), position = _c[0], setPsition = _c[1];
    function contextMenuHandler(event) {
        event.preventDefault();
        setPsition({ x: event.pageX, y: event.pageY });
        setShowContextMenu(!showContextMenu);
        console.debug(event);
    }
    return (React.createElement("div", { onContextMenu: contextMenuHandler },
        children,
        React.createElement("div", { id: "context-menu", "data-visibility": showContextMenu, style: {
                left: position.x,
                top: position.y,
            } },
            "contextMenu",
            React.createElement("ul", { id: "context-menu-list" },
                React.createElement("li", null, "test1"),
                React.createElement("li", null, "test1"),
                React.createElement("li", null, "test1"),
                React.createElement("li", null, "test1"),
                React.createElement("li", null, "test1")))));
};
export { ContextMenu };
//# sourceMappingURL=ContextMenu.js.map