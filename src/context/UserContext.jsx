import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const login = (username) => {
    setUserName(username);
  };

  const logout = () => {
    setUserName("");
  };

  const goback = () => {
    navigate(-1);
  };

  return (
    <div>
      <UserContext.Provider value={{ username, login, logout, goback }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
