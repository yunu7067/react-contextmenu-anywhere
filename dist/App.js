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
import "./App.css";
import { ContextMenu } from "./lib/ContextMenu";
function App() {
    var menus = [
        [
            {
                icon: _jsx("img", { src: "/airplane.svg", alt: "airplane", width: "20", height: "20" }, void 0),
                name: "menu1",
                key: "M",
                handleClick: function () { return console.log("menu1 selected"); },
            },
            {
                icon: "🥩",
                name: "menu2",
                key: "M",
                handleClick: function () { return console.log("menu1 selected"); },
            },
            {
                name: "menu3",
                key: "E",
                handleClick: function () { return console.log("menu2 selected"); },
            },
            {
                name: "menu4(disabled)",
                key: "P",
                disabled: true,
                submenu: [
                    [
                        {
                            icon: "🥂",
                            name: "submenu1",
                            key: "Q",
                            handleClick: function () { return console.log("submenu1 selected"); },
                        },
                        {
                            name: "submenu2",
                            key: "T",
                            handleClick: function () { return console.log("submenu2 selected"); },
                        },
                    ],
                ],
            },
        ],
        [
            {
                icon: "🍱",
                name: "menu3",
                key: "S",
                submenu: [
                    [
                        {
                            icon: "😂",
                            name: "submenu1",
                            key: "Q",
                            handleClick: function () { return console.log("submenu1 selected"); },
                            submenu: [
                                [
                                    {
                                        icon: "😂",
                                        name: "submenu1",
                                        key: "Q",
                                        handleClick: function () { return console.log("submenu1 selected"); },
                                    },
                                    {
                                        icon: "",
                                        name: "submenu2",
                                        key: "T",
                                        handleClick: function () { return console.log("submenu2 selected"); },
                                        submenu: [
                                            [
                                                {
                                                    icon: "😂",
                                                    name: "submenu1",
                                                    key: "Q",
                                                    handleClick: function () { return console.log("submenu1 selected"); },
                                                },
                                                {
                                                    icon: "",
                                                    name: "submenu2",
                                                    key: "T",
                                                    handleClick: function () { return console.log("submenu2 selected"); },
                                                },
                                            ],
                                        ],
                                    },
                                ],
                            ],
                        },
                        {
                            icon: "",
                            name: "submenu2",
                            key: "T",
                            handleClick: function () { return console.log("submenu2 selected"); },
                        },
                    ],
                ],
            },
        ],
    ];
    var menus2 = [
        [
            {
                icon: _jsx("img", { src: "/airplane.svg", alt: "airplane", width: "20", height: "@0" }, void 0),
                name: "메뉴 테스트2",
                key: "M",
                handleClick: function () { return console.log("menu1 selected"); },
            },
        ],
    ];
    return (_jsx("div", __assign({ className: "App" }, { children: _jsx(ContextMenu, __assign({ menu: menus }, { children: _jsxs("div", { children: ["\uC804\uC5ED \uC6B0\uD074\uB9AD", _jsx("span", { children: "\uC804\uC5ED \uC6B0\uD074\uB9AD" }, void 0), _jsx("p", { children: " " }, void 0), _jsx("p", { children: " " }, void 0), _jsx("p", { children: " " }, void 0), _jsx(ContextMenu, __assign({ menu: menus2 }, { children: _jsx("div", { children: "\uC6B0\uD074\uB9AD1" }, void 0) }), void 0), _jsx("p", {}, void 0), _jsx("div", { children: "\uC6B0\uD074\uB9AD2" }, void 0)] }, void 0) }), void 0) }), void 0));
}
export default App;
//# sourceMappingURL=App.js.map