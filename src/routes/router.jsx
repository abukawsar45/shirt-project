import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../components/Home/ErrorElement/ErrorElement";
import Shirt3byDefault from "../components/Shirt3byDefault/Shirt3byDefault";
import SingleCart from "../components/SingleCart/SingleCart";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Shirt3byDefault />,
      },
      {
        path: '/shirt/:id',
        element: <SingleCart />,
        loader: ({ params }) => {
          return fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
              const id = parseInt(params?.id);
              const specificTarget = data?.find((item) => item.id === id);
              return specificTarget;
            });
        },
      },
    ],
  },
]);
export default router;