# react-contextmenu-anywhere basic example

react-contextmenu-anywhere의 기본 예제입니다.

## Basic Usage

0. `react-contextmenu-anywhere` 패키지를 추가합니다.

```console
npm i react-contextmenu-anywhere
# or
yarn add react-contextmenu-anywhere
```

1. 최상위를 `ContextMenuProvider` 컴포넌트로 감싸줍니다.

```tsx
/* index.tsx */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextMenuProvider } from 'react-contextmenu-anywhere';

ReactDOM.render(
  <React.StrictMode>
    <ContextMenuProvider>
      <App />
    </ContextMenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

2. 컨텍스트 메뉴를 사용하고자 하는 부분을 `ContextMenu`로 감싼 후, 메뉴 객체를 만들어 menu 속성값으로 넘겨줍니다.

```tsx
/* App.tsx*/

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContextMenu, { MenuContainerType } from 'react-contextmenu-anywhere';

function App() {
  const menus: MenuContainerType = [
    [
      {
        icon: '🥩',
        name: 'menu1',
        handleClick: () => console.log('menu1 selected'),
      },
      {
        name: 'menu2',
        handleClick: () => console.log('menu2 selected'),
      },
      {
        name: 'menu3(disabled)',
        disabled: true,
        submenu: [
          [
            {
              icon: '🥂',
              name: 'submenu1',
              handleClick: () => console.log('submenu1 selected'),
            },
          ],
        ],
      },
    ],
    [
      {
        icon: '🍱',
        name: 'menu3',
        submenu: [
          [
            {
              icon: '😂',
              name: 'submenu1',
              handleClick: () => console.log('submenu1 selected'),
              submenu: [
                [
                  {
                    icon: '😂',
                    name: 'submenu1',
                    handleClick: () => console.log('submenu1 selected'),
                  },
                ],
              ],
            },
            {
              icon: '',
              name: 'submenu2',
              handleClick: () => console.log('submenu2 selected'),
            },
          ],
        ],
      },
    ],
  ];

  return (
    <div className="App">
      <ContextMenu menu={menus}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </ContextMenu>
    </div>
  );
}

export default App;
```

3. 서버를 시작한 후, 정상적으로 동작하는지 확인합니다.

```console
npm run start
# or
yarn start
```
