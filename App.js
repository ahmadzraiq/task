import React, { useState } from "react";
import { LogIn } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { AuthContext } from "./context";

export default function App() {
  const [login, setLogin] = useState(true);

  const authContext = {
    logIn: () => {
      setLogin(true);
    },
    signOut: () => {
      setLogin(false);
    },
  };

  return (
    <>
      {login ? (
        <AuthContext.Provider value={authContext}>
          <Main />
        </AuthContext.Provider>
      ) : (
        <LogIn setLogin={setLogin} />
      )}
    </>
  );
}
