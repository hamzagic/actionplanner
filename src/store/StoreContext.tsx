"use client";
import { createContext } from 'react';

export interface User {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

interface StoreContextProps {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
  signup: (userData: User) => void;
}

const StoreContext = createContext<StoreContextProps>({
  user: { email: '', password: '', isLoggedIn: false },
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export default StoreContext;
