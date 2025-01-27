import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/Css/app.css";
import { DashboardLayout, Error, Home, About } from "./Pages";
import { Projects } from "./Components"; // Import ProjectDetails

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "projects", element: <Projects /> },
    
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
