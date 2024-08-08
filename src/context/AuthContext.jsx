/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { loginUser } from '../services/authSevice';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ usernameOrEmail, password }) => {
    const res = await loginUser(usernameOrEmail, password);

    if (!res.ok) {
      return false;
    }

    const data = await res.json();

    localStorage.setItem('tokenLogin', data.token);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};