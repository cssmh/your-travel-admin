import { createBrowserRouter } from "react-router-dom";
import Login from "./component/login";
import Dashboard from "./component/Dashboard";
import CarsBooking from "./component/CarsBooking";
import HotelBooking from "./component/HotelBooking";
import TourBooking from "./component/TourBooking";
import Drafts from "./component/Drafts";
import Customers from "./component/Customers";
import Enquiries from "./component/Enquiries";
import Payments from "./component/Payments";
import Transaction from "./component/Transaction";
import Reports from "./component/Reports";
import Settings from "./component/Settings";
import DashLayout from "./component/DashLayout";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/car-booking",
        element: <CarsBooking />,
      },
      {
        path: "/dashboard/hotel-booking",
        element: <HotelBooking />,
      },
      {
        path: "/dashboard/tour-booking",
        element: <TourBooking />,
      },
      {
        path: "/dashboard/drafts",
        element: <Drafts />,
      },
      {
        path: "/dashboard/customers",
        element: <Customers />,
      },
      {
        path: "/dashboard/enquiries",
        element: <Enquiries />,
      },
      {
        path: "/dashboard/payments",
        element: <Payments />,
      },
      {
        path: "/dashboard/transaction",
        element: <Transaction />,
      },
      {
        path: "/dashboard/reports",
        element: <Reports />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default Routes;
