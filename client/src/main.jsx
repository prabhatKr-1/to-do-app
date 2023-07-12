import React, { createContext,useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const AuthContext = createContext(null);

const AppWrapper = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth, 
        user,
        setUser,
      }}
    >
      <App />
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

