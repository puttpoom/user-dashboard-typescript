import React, { createContext, useState, ReactNode, useEffect } from "react";
import { loginService } from "../services/user";
import { UserCredential, UserData } from "../types/User";
import { TostError } from "../utils/toast";

type AuthContextType = {
  authUser: UserData | null;
  setAuthUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: boolean;
  handleLogin: (data: UserCredential) => void;
  handleLogout: () => void;
};

type LoginResponseType = {
  status: number;
  message: string;
  data: any;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authUserData = localStorage.getItem("authUser");
    if (authUserData) {
      const jsonUserData = JSON.parse(authUserData);
      setAuthUser(jsonUserData);
      setIsAuthenticated(true);
    } else {
      setAuthUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  async function handleLogin(credetial: UserCredential) {
    console.log(credetial, "AuthContext");
    try {
      const res = (await loginService(credetial)) as LoginResponseType;
      const { password, ...newData } = res.data;
      setAuthUser(newData);
      localStorage.setItem("authUser", JSON.stringify(newData));
      setIsAuthenticated(true);
    } catch (error: any) {
      localStorage.removeItem("userData");
      setIsAuthenticated(false);
      setError(error.message);
      TostError(error.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem("authUser");
    setIsAuthenticated(false);
  }

  const value: AuthContextType = {
    authUser,
    setAuthUser,
    error,
    setError,
    handleLogin,
    isAuthenticated,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
