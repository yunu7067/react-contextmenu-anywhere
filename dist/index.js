import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextMenuProvider from "./lib/Provider";
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(ContextMenuProvider, { children: _jsx(App, {}, void 0) }, void 0) }, void 0), document.getElementById("root"));
//# sourceMappingURL=index.js.map