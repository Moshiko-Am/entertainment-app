import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.tsx";
import TVSeriesPage from "./pages/TVSeriesPage/TVSeriesPage.tsx";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/tv-series",
        element: <TVSeriesPage />,
      },
      {
        path: "/bookmarks",
        element: <BookmarksPage />,
      },
    ],
  },
]);

export default router;
