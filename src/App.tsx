import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import ErrorPage from "./error-page"
import Demo from "./components/react-flow/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "workflow/:id",
        element: <Demo/>,
      },
    ],
  },
  {
    path: "*", // Handle unmatched routes, redirect, or display a 404 component
    element:<ErrorPage />, // Replace with your desired behavior
  },
]);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
