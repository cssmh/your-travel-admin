import { NavLink, Outlet } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaHome,
  FaCar,
  FaHotel,
  FaSuitcase,
  FaDraft2Digital,
  FaUsers,
  FaEnvelope,
  FaCreditCard,
  FaExchangeAlt,
  FaChartBar,
  FaCog,
  FaArrowRight,
} from "react-icons/fa";

const DashLayout = () => {
 return (
   <div className="min-h-screen flex flex-col">
     <div className="bg-[#2e2532] text-white flex justify-between items-center px-6 py-4">
       <div className="text-xl font-bold">YOURTRIP24</div>
       <div className="flex items-center gap-6">
         <FaBell className="text-lg cursor-pointer" />
         <div className="flex items-center gap-2">
           <FaUserCircle className="text-2xl" />
           <span>John Doe</span>
         </div>
       </div>
     </div>
     <div className="flex flex-1">
       <div className="bg-[#2e2532] w-64 text-white flex flex-col">
         <nav className="flex-1 p-4 space-y-4">
           <NavLink
             to="/dashboard"
             end
             className={({ isActive }) =>
               `relative flex items-center gap-4 px-4 py-2 rounded hover:bg-gray-700 transition ${
                 isActive ? "text-white" : "text-gray-400"
               }`
             }
           >
             {({ isActive }) => (
               <>
                 {isActive && (
                   <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e0b0ff] h-full w-1 p-1 rounded" />
                 )}
                 <FaHome />
                 <span>Dashboard</span>
                 <FaArrowRight className="ml-auto" />
               </>
             )}
           </NavLink>
           {[
             {
               to: "/dashboard/car-booking",
               icon: <FaCar />,
               name: "Car Booking",
             },
             {
               to: "/dashboard/hotel-booking",
               icon: <FaHotel />,
               name: "Hotel Booking",
             },
             {
               to: "/dashboard/tour-booking",
               icon: <FaSuitcase />,
               name: "Tour Booking",
             },
             {
               to: "/dashboard/drafts",
               icon: <FaDraft2Digital />,
               name: "Drafts",
             },
             {
               to: "/dashboard/customers",
               icon: <FaUsers />,
               name: "Customers",
             },
             {
               to: "/dashboard/enquiries",
               icon: <FaEnvelope />,
               name: "Enquiries",
             },
             {
               to: "/dashboard/payments",
               icon: <FaCreditCard />,
               name: "Payments",
             },
             {
               to: "/dashboard/transaction",
               icon: <FaExchangeAlt />,
               name: "Transaction",
             },
             {
               to: "/dashboard/reports",
               icon: <FaChartBar />,
               name: "Reports",
             },
             { to: "/dashboard/settings", icon: <FaCog />, name: "Settings" },
           ].map((item) => (
             <NavLink
               to={item.to}
               key={item.name}
               className={({ isActive }) =>
                 `relative flex items-center gap-4 px-4 py-2 rounded hover:bg-gray-700 transition ${
                   isActive ? "text-white" : "text-gray-400"
                 }`
               }
             >
               {({ isActive }) => (
                 <>
                   {isActive && (
                     <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e0b0ff] h-full w-1 p-1 rounded" />
                   )}
                   {item.icon}
                   <span>{item.name}</span>
                   <FaArrowRight className="ml-auto" />
                 </>
               )}
             </NavLink>
           ))}
         </nav>
       </div>
       <div className="flex-1 p-10">
         <Outlet />
       </div>
     </div>
   </div>
 );
};

export default DashLayout;
