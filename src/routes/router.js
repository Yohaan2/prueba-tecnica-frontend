import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default function Router() {
  return useRoutes([
    { path: "/", element: <Navigate to="/home" replace/> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <Navigate to="/" /> },
  ]
  );
} 
