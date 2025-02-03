import Layout from "@/components/layout/Layout.tsx";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        // {
        //   path: "/project",
        //   element: <ProjectPage />,
        // },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
