import { createContext } from "react";
import type { UserData } from "./AuthContextProvider";

interface AuthContextType {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  saveUserData: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
