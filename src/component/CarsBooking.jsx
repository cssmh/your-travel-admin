import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaCar, FaUserTie } from "react-icons/fa";
import { LiaDirectionsSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { Link } from "react-router-dom";

const carsData = [
  {
    no: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    number: "ABC-1234",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "5",
    license: "B",
    price: "$50/day",
    status: "Available",
  },
  {
    no: 2,
    name: "Honda Civic",
    brand: "Honda",
    number: "XYZ-5678",
    fuel: "Petrol",
    transmission: "Manual",
    capacity: "5",
    license: "B",
    price: "$45/day",
    status: "Unavailable",
  },
  {
    no: 3,
    name: "Tesla Model S",
    brand: "Tesla",
    number: "TES-2023",
    fuel: "Electric",
    transmission: "Automatic",
    capacity: "5",
    license: "A",
    price: "$80/day",
    status: "Available",
  },
  {
    no: 4,
    name: "Ford Ranger",
    brand: "Ford",
    number: "FOR-9090",
    fuel: "Diesel",
    transmission: "Manual",
    capacity: "5",
    license: "C",
    price: "$60/day",
    status: "Unavailable",
  },
  {
    no: 5,
    name: "BMW X5",
    brand: "BMW",
    number: "BMW-5555",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "7",
    license: "D",
    price: "$100/day",
    status: "Available",
  },
];

const topMenuItems = [
  {
    name: "Car Listing",
    icon: <FaCar />,
    bgColor: "#bceaff",
    count: 5,
    text: "View Rooms",
    link: "/car-listing",
  },
  {
    name: "Driver Listing",
    icon: <FaUserTie />,
    bgColor: "#e0b0ff",
    count: 5,
    text: "View Details",
    link: "/car-listing",
  },
  {
    name: "Orders",
    icon: <LiaDirectionsSolid />,
    bgColor: "#c66060",
    count: 30,
    text: "View Details",
    link: "/car-listing",
  },
  {
    name: "Special Offers",
    icon: <LuAlarmClock />,
    bgColor: "#522864",
    count: 10,
    text: "Special Offers",
    link: "/car-listing",
  },
];

const CarsBooking = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mb-5">
        {topMenuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="border flex flex-col items-center text-base font-semibold cursor-pointer"
          >
            <div
              className="shadow p-4 flex flex-col items-center justify-center w-full"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex items-center justify-between w-full px-2">
                <span className="text-4xl text-white">{item.icon}</span>
                <span className="text-white font-medium text-4xl">
                  {item.count}
                </span>
              </div>
              <p className="mt-4 text-sm text-white w-full text-right">
                {item.name}
              </p>
            </div>
            <p
              style={{ color: item.bgColor }}
              className="py-[2px] px-4 text-sm text-gray-800 w-full text-left"
            >
              {item.text}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Car List</h2>
        <button className="bg-[#bb8dd9] text-white px-4 py-2 rounded-lg ">
          Add New Car
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {[
                "No",
                "Car Name",
                "Brand",
                "Car Number",
                "Fuel",
                "Transmission",
                "Capacity",
                "License",
                "Price",
                "Status",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {carsData.map((car, index) => (
              <tr key={index}>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.no}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.name}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.brand}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.number}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.fuel}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.transmission}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.capacity}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.license}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.price}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  {car.status}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                  <button className="text-green-500 hover:text-green-700">
                    <FaEdit />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarsBooking;
