# react-contextmenu-anywhere

## Installation

You can install this module with npm or yarn.

```
npm i react-contextmenu-anywhere
# or
yarn add react-contextmenu-anywhere
```

## Quick start

1. 최상위에 ContextMenuProvider 추가

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextMenuProvider from "./lib/Provider";

ReactDOM.render(
  <React.StrictMode>
    <ContextMenuProvider>
      <App />
    </ContextMenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

2. 컨텍스트 메뉴를 사용하고자 하는 곳에 ContextMenu 추가

```
import React from "react";
import "./App.css";
import { ContextMenu } from "./lib/ContextMenu";
import { MenuContainerType } from "./lib/Types";

function App() {
  const menus: MenuContainerType = [
    [
      {
        icon: "🥩",
        name: "menu1",
        handleClick: () => console.log("menu1 selected"),
      },
      {
        name: "menu2",
        handleClick: () => console.log("menu2 selected"),
      },
      {
        name: "menu3(disabled)",
        disabled: true,
        submenu: [
          [
            {
              icon: "🥂",
              name: "submenu1",
              key: "Q",
              handleClick: () => console.log("submenu1 selected"),
            },
          ],
        ],
      },
    ],
    [
      {
        icon: "🍱",
        name: "menu3",
        submenu: [
          [
            {
              icon: "😂",
              name: "submenu1",
              handleClick: () => console.log("submenu1 selected"),
              submenu: [
                [
                  {
                    icon: "😂",
                    name: "submenu1",
                    handleClick: () => console.log("submenu1 selected"),
                  },
                  {
                    icon: "",
                    name: "submenu2",
                    handleClick: () => console.log("submenu2 selected"),
                    submenu: [
                      [
                        {
                          icon: "😂",
                          name: "submenu1",
                          handleClick: () => console.log("submenu1 selected"),
                        },
                        {
                          icon: "",
                          name: "submenu2",
                          handleClick: () => console.log("submenu2 selected"),
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
              handleClick: () => console.log("submenu2 selected"),
            },
          ],
        ],
      },
    ],
  ];

  const menus2: MenuContainerType = [
    [
      {
        icon: "😂",
        name: "메뉴 테스트2",
        key: "M",
        handleClick: () => console.log("menu1 selected"),
      },
    ],
  ];

  return (
    <div className="App">
      <ContextMenu menu={menus}>
        <div>
          ContextMenu1(Right click)
          <p></p>
          <ContextMenu menu={menus2}>
            <div>ContextMenu2(Right click)</div>
          </ContextMenu>
        </div>
      </ContextMenu>
    </div>
  );
}

export default App;
```

## Usage

### Basic

준비중

### Darkmode

`useDarkmode` 함수를 사용하고자 하는 부분의 최상위에 선언한다.

```jsx
function App() {
  const [isDarkmode, toggleDarkmode] = useDarkmode();

  return (
    <div className="App">
      <ContextMenu menu={menus}>Right click here!</ContextMenu>

      <button type="button" onClick={toggleDarkmode}>
        toggle darkmode
      </button>
    </div>
  );
}
```

만약 초기값을 지정해주고 싶다면 `ContextMenuProvider`의 속성 `darkmode`를 명시한다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextMenuProvider from './lib/Provider';

ReactDOM.render(
  <React.StrictMode>
    <ContextMenuProvider darkmode>
      <App />
    </ContextMenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Examples

준비중

- [Basic usage](./example/basic)
