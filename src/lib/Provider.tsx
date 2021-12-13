import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ContextMenuState, ContextMenuDispatch, contextMenuReducer } from './store/ContextMenuContext';

/* 컨텍스트 생성 */
const ContextMenuStateContext = createContext<ContextMenuState>({
  isVisible: false,
  removeCurrentContextMenu: () => {},
});
const ContextMenuDispatchContext = createContext<ContextMenuDispatch>(() => null);

type ContextMenuProviderProps = {
  children: React.ReactNode;
};

function ContextMenuProvider({ children }: ContextMenuProviderProps) {
  const [state, dispatch] = useReducer(contextMenuReducer, {
    isVisible: false,
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

export default ContextMenuProvider;
export { useContextMenu, useContextMenuState, useContextMenuDispatch };
