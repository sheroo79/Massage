import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AdminNavbar from "./AdminNavbar";
import { IoIosSearch } from "react-icons/io";
import { HiAdjustmentsVertical } from "react-icons/hi2";

function ServiceProviders({ role }) {
  const adminHeaders = [
    "Name",
    "Email",
    "Mobile number",
    "Location",
    "No. Services",
    "Profile Status",
    "Update Status",
    "Action",
  ];

  const spHeaders = [
    "Service Name",
    "Description",
    "Price",
    "Duration",
    "Calendar Color",
    "Active Status",
    "Action",
  ];

  const headers = role === "admin" ? adminHeaders : spHeaders;
  const adminData = [
    {
      name: "Hansu Luu",
      email: "provider@gmail.com",
      phone: "06423234213",
      location: "Brooklyn",
      services: 2,
      profileStatus: "Active",
      approvalStatus: "Approved",
    },
    {
      name: "Maria Khan",
      email: "maria@gmail.com",
      phone: "06523234213",
      location: "Queens",
      services: 4,
      profileStatus: "Active",
      approvalStatus: "Pending",
    },
    // more data...
  ];

  const spData = [
    {
      title: "Swedish Massage",
      description:
        "A relaxing massage using gentle techniques to soothe muscles and improve circulation.",
      price: "R920.00",
      duration: "1h",
      color: "#F22294",
      active: true,
    },
    {
      title: "Hot Stone Therapy",
      description:
        "Heat-infused stones to relieve tension and promote deep muscle relaxation.",
      price: "R1100.00",
      duration: "1h 30m",
      color: "#00ADEF",
      active: false,
    },
    // more data...
  ];

  return (
    <>
      <div className="bg-[#F5F3FF] p-4 w-full h-screen overflow-x-hidden">
        <AdminNavbar
          name={role === "admin" ? "Service Providers" : "Services"}
        />
        {/* Search */}
        <div
          className="flex items-center justify-between
                     gap-5 mt-3"
        >
          <div className="flex gap-2 w-full">
            <div className="relative w-[400px] max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-lg pl-5 h-[56px] py-2 shadow-custom-purple bg-[#FAFAFA] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                <IoIosSearch className="text-[24.75px] text-[#0E1E40]" />
              </span>
            </div>
            <div className="bg-white hidden sm:hidden md:flex text-xl h-[50px] w-[50px] rounded-full flex cursor-pointer justify-center items-center text-gray-600">
              <HiAdjustmentsVertical />
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-end items-center w-full hidden sm:flex">
            <button className="w-[247px] h-[52px] bg-[#5e50bf] text-[16px] font-montserrat font-semibold text-[#FFFFFF] text-center rounded rounded-full rounded-tr-none">
              {role === "admin" ? "Add Service Provider" : "Add Service"}
            </button>
          </div>
        </div>
        <div
          className="mt-5 bg-[#f5f6fd] rounded-lg overflow-x-auto "
          style={{
            scrollbarColor: "#5E50BF #edf2f7", // thumb color | track color
            scrollbarWidth: "thin",
          }}
        >
          <table className="w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-[#E8E9EE] text-[#0E1E40] text-[13px] font-bold font-montserrat text-left h-[64.96px]">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="px-6 py-3 text-[13.46px] font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {role === "admin"
                ? adminData.map((item, index) => (
                    <tr
                      key={index}
                      className="h-[79.73px] font-normal font-montserrat text-[12px]"
                    >
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">{item.location}</td>
                      <td className="px-6 py-4 text-center">{item.services}</td>
                      <td className="px-6 py-4">
                        <span className="bg-[#02A847] text-white text-xs px-3 py-1 flex items-center justify-center w-[102px] h-[30px] rounded-full">
                          {item.profileStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-[#02A89D] text-white text-xs px-3 py-1 flex items-center justify-center w-[102px] h-[30px] rounded-full">
                          {item.approvalStatus}
                        </span>
                      </td>
                      <td className="flex justify-around items-center mt-4 space-x-2 border rounded h-8 w-16 text-lg px-1">
                        <button className="text-gray-500 hover:text-blue-600 text-center border-r pr-2">
                          <FiEdit />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  ))
                : spData.map((item, index) => (
                    <tr
                      key={index}
                      className="h-[79.73px] font-normal font-montserrat text-[12px]"
                    >
                      <td className="px-6 py-4">{item.title}</td>
                      <td className="px-6 py-4">
                        <div
                          className="truncate w-[100px] whitespace-nowrap overflow-hidden text-ellipsis"
                          title={item.description}
                        >
                          {item.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[13.46px] font-semibold">{item.price}</td>
                      <td className="px-6 py-4 text-center text-[13.46px] font-semibold">{item.duration}</td>
                      <td className="flex justify-center mt-8 -ml-8">
                        <div
                          className={`h-[19.23px] w-[19.23px] rounded-full`}
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </td>
                      <td className="px-3 py-4 mr-auto">
                        <div className="flex items-center gap-3">
                          <label className="switch">
                            <input
                              type="checkbox"
                              defaultChecked={item.active}
                            />
                            <span className="slider"></span>
                          </label>
                          <span className="text-[#5e50bf] font-medium text-sm font-montserrat">
                            {item.active ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </td>
                      <td className="flex justify-around items-center mt-4 space-x-2 border rounded h-8 w-16 text-lg px-1">
                        <button className="text-gray-500 hover:text-blue-600 text-center border-r pr-2">
                          <FiEdit />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ServiceProviders;
