import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../components/Home/ErrorElement/ErrorElement";
import Shirt3byDefault from "../components/Shirt3byDefault/Shirt3byDefault";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Shirt3byDefault/>
      }
    ]
  },
]);
export default router;