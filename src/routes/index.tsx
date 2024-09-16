import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedPage from "../pages/ProtectedPage";
import RedirectIfAuthenticated from "../pages/RedirectIfAuthenticated";
import Header from "../components/Header";
import UserPage from "../pages/UserPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header title="User Dashboard" />,
    children: [
      {
        path: "",
        element: (
          <ProtectedPage>
            <HomePage />
          </ProtectedPage>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/user",
    element: <Header title="User Page" />,
    children: [{ path: ":userId", element: <UserPage /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
