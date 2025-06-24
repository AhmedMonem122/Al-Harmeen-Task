import { jwtDecode } from "jwt-decode";
import { useEffect, type ReactNode } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export interface UserData {
  email: string;
  unique_name: string;
  FirstName: string;
  LastName: string;
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;
    const decodedToken = jwtDecode<UserData>(encodedToken);
    setUserData(decodedToken);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext value={{ userData, setUserData, saveUserData }}>
      {children}
    </AuthContext>
  );
};

export default AuthContextProvider;
