'use client';
import { useReducer, useMemo } from 'react';
import StoreContext, { User } from './StoreContext';

const initialState = {
  user: {}
};

const reducer = (state: typeof initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Actions
  const login = (userData: typeof initialState.user) => dispatch({ type: 'LOGIN', payload: userData });
  const signup = (userData: typeof initialState.user) => dispatch({ type: 'LOGIN', payload: userData });
  const logout = () => dispatch({ type: 'LOGOUT' });

  const contextValue = useMemo(
    () => ({
      user: state.user,
      login: (userData: User) => login(userData),
      signup: (userData: User) => signup(userData),
      logout
    }),
    [state.user]
  );
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
