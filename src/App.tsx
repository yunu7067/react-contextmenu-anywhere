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
        key: "M",
        handleClick: () => console.log("menu1 selected"),
      },
      {
        name: "menu2",
        key: "E",
        handleClick: () => console.log("menu2 selected"),
      },
      {
        name: "menu3(disabled)",
        key: "P",
        disabled: true,
        submenu: [
          [
            {
              icon: "🥂",
              name: "submenu1",
              key: "Q",
              handleClick: () => console.log("submenu1 selected"),
            },
            {
              name: "submenu2",
              key: "T",
              handleClick: () => console.log("submenu2 selected"),
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
              handleClick: () => console.log("submenu1 selected"),
              submenu: [
                [
                  {
                    icon: "😂",
                    name: "submenu1",
                    key: "Q",
                    handleClick: () => console.log("submenu1 selected"),
                  },
                  {
                    icon: "",
                    name: "submenu2",
                    key: "T",
                    handleClick: () => console.log("submenu2 selected"),
                    submenu: [
                      [
                        {
                          icon: "😂",
                          name: "submenu1",
                          key: "Q",
                          handleClick: () => console.log("submenu1 selected"),
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
          전역 우클릭
          <span>전역 우클릭</span>
          <p> </p>
          <p> </p>
          <p> </p>
          <ContextMenu menu={menus2}>
            <div>우클릭1</div>
          </ContextMenu>
          <p></p>
          <div>우클릭2</div>
        </div>
      </ContextMenu>
    </div>
  );
}

export default App;
