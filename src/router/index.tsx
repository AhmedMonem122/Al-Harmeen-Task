import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./root";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

export default router;
