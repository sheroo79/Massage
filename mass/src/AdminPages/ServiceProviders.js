import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AdminNavbar from "./AdminNavbar";
import { IoIosSearch } from "react-icons/io";
import { HiAdjustmentsVertical } from "react-icons/hi2";

function ServiceProviders() {
  return (
    <>
      <div className="bg-[#F5F3FF] p-4 w-full h-screen overflow-x-hidden">
        <AdminNavbar />
        {/* Search */}
        <div
          className="flex items-center justify-between
                     gap-5 mt-3"
        >
          <div className="flex gap-2 w-full">
            <div className="relative w-72 max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                <IoIosSearch className="text-lg" />
              </span>
            </div>
            <div className="bg-white hidden sm:hidden md:flex text-xl h-10 w-10 rounded-full flex cursor-pointer justify-center items-center text-gray-600">
              <HiAdjustmentsVertical />
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-end items-center w-full hidden sm:flex">
            <button className="min-w-[11vw] py-2 bg-[#5e50bf] text-white text-center rounded hover:bg-[#4e38db] rounded-full rounded-tr-none">
              Add User
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
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-[#f3f4f6] text-gray-700 text-left">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Mobile number</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">NO.services</th>
                <th className="px-6 py-3">Profile Status</th>
                <th className="px-6 py-3">Update Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
              {/* Row 1 */}
              <tr>
                <td className="px-6 py-4">Hansu Luu</td>
                <td className="px-6 py-4">provider@gmail.com</td>
                <td className="px-6 py-4">06423234213</td>
                <td className="px-6 py-4">Brooklyn</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-center">2</span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#02A847] text-white text-xs px-3 py-1 flex items-center justify-center min-w-12 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#02A89D] text-white text-xs px-3 py-1 flex items-center justify-center min-w-12 rounded-full">
                    Approved
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
              {/* Row 2 */}
              <tr>
                <td className="px-6 py-4">Hansu Luu</td>
                <td className="px-6 py-4">provider@gmail.com</td>
                <td className="px-6 py-4">06423234213</td>
                <td className="px-6 py-4">Brooklyn</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-center">3</span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#FF9E58] text-white text-xs px-3 py-1 flex items-center justify-center min-w-12 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#5895FF] text-white text-xs px-3 py-1 flex items-center justify-center min-w-12 rounded-full">
                    Suspended
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ServiceProviders;
