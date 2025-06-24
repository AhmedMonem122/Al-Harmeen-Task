import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/auth-context/AuthContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
