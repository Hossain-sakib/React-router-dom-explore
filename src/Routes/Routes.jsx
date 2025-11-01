// Routes/Routes.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // use react-router-dom
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Users from "../Components/Users/Users"

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "users",
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
          element: <Users />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
