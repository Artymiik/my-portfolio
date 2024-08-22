import * as pages from "./pages/export.page.config";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <pages.home />,
      },
      {
        path: "about",
        element: <pages.about />,
      },
    ],
  },
]);

export default App;
