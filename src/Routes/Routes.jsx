// Routes/Routes.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // use react-router-dom
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Users from "../Components/Users/Users";
import UserDetails from "../Components/Users/UserDetails/UserDetails";
import Posts from "../Components/Posts/Posts";
import PostDetails from "../Components/Posts/PostDetails/PostDetails";
import Error from "../Pages/Error/Error";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
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
          path: "posts",
          loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
          element: <Posts />,
        },
        {
          path: "posts/:postId",
          loader: ({ params }) =>
            fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            ),
          element: <PostDetails />,
        },
        {
          path: "users",
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
          element: <Users />,
        },
        {
          path: "userDetails/:userId",
          loader: ({ params }) =>
            fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            ),
          element: <UserDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
