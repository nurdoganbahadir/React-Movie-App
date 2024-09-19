import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
