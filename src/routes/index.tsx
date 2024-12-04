import DashboardLayout from "@/components/layout/DashboardLayout";
import Analytics from "@/pages/Analytics";
import Customers from "@/pages/Customers";
import Dashboard from "@/pages/Dashboard";
import Orders from "@/pages/Orders";
import Products from "@/pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "@/pages/Login";
import ProtectedRoute from "@/components/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      { path: "customers", element: <Customers /> },
      { path: "analytics", element: <Analytics /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
