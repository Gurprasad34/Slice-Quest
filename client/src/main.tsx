import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PizzaShops from "./pages/PizzaShops";
import CreateAccount from "./pages/CreateAccount";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "create-account", element: <CreateAccount /> },
      { path: "profile", element: <UserProfile /> },
      { path: "pizza-shops/:type", element: <PizzaShops /> },
      {
        path: 'profile',
        element: <UserProfile />,
      }
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
