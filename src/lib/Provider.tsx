import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ContextMenuState, ContextMenuDispatch, contextMenuReducer } from './store/ContextMenuContext';

/* 컨텍스트 생성 */
const ContextMenuStateContext = createContext<ContextMenuState>({
  isVisible: false,
  isDarkmode: false,
  removeCurrentContextMenu: () => {},
});
const ContextMenuDispatchContext = createContext<ContextMenuDispatch>(() => null);

type ContextMenuProviderProps = {
  children: React.ReactNode;
  darkmode?: boolean;
};

function ContextMenuProvider({ children, darkmode }: ContextMenuProviderProps) {
  const [state, dispatch] = useReducer(contextMenuReducer, {
    isVisible: false,
    isDarkmode: darkmode || false,
    removeCurrentContextMenu: () => {},
  });

  return (
    <ContextMenuStateContext.Provider value={state}>
      <ContextMenuDispatchContext.Provider value={dispatch}>{children}</ContextMenuDispatchContext.Provider>
    </ContextMenuStateContext.Provider>
  );
}

function useContextMenuState(): ContextMenuState {
  const state = useContext(ContextMenuStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

function useContextMenuDispatch(): ContextMenuDispatch {
  const dispatch = useContext(ContextMenuDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}

function useContextMenu(): [ContextMenuState, ContextMenuDispatch] {
  const state = useContextMenuState();
  const dispatch = useContextMenuDispatch();

  return [state, dispatch];
}

function useDarkmode(): [boolean, () => void] {
  const state = useContextMenuState();
  const dispatch = useContextMenuDispatch();
  const darkmode = state.isDarkmode;
  const toggleDarkmode = () => {
    dispatch({ type: 'TOGGLE_DARKMODE' });
  };

  return [darkmode, toggleDarkmode];
}

export default ContextMenuProvider;
export { useContextMenu, useContextMenuState, useContextMenuDispatch, useDarkmode };
