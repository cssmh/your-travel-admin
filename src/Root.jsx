import { createBrowserRouter } from "react-router-dom";
import Login from "./component/login";
const Root = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default Root;
