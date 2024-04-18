import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/home" replace/>},
    { path: "/home", element: (
      <DashboardLayout>
        <Home />
      </DashboardLayout>
  ) },
    { path: "/about", element: (
      <DashboardLayout>
        <About />
      </DashboardLayout>
    ) },
    { path: "*", element: <Navigate to="/" /> },
  ]
  );

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
