import { Layout } from "@/components/layout/Layout.tsx";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage.tsx";
import { PetCategoryPage } from "@/pages/PetCategoryPage";
import { PetDetail } from "@/pages/PetDetailPage";
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
        {
          path: "/pets",
          element: <PetCategoryPage />,
        },
        // {
        //   path: "/pets/:petCategory",
        //   element: <PetCategoryDetail />,
        // },
        {
          path: "/pets/:category/:slug.id=:uuid",
          element: <PetDetail />,
        },
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
