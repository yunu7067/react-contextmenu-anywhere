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
