import { FiSidebar } from "react-icons/fi";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSidebar } from "../Components/SidebarContext";
const Navbar = () => {
  const { setIsSidebarOpen } = useSidebar();
  return (
    <>
      <div
        className="flex items-center justify-between
         gap-5"
      >
        <div className="flex gap-2 w-full">
          <div onClick={() => setIsSidebarOpen(prev => !prev)} className="bg-white cursor-pointer text-xl h-10 min-w-10 rounded-full flex justify-center items-center text-gray-600">
            <FiSidebar />
          </div>
          <div className="relative w-72 max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              <IoIosSearch className="text-lg" />
            </span>
          </div>
          <div className="bg-white hidden sm:hidden md:flex text-xl h-10 w-10 rounded-full flex justify-center items-center text-gray-600">
            <HiAdjustmentsVertical/>
          </div>
          
        </div>
        <div className="flex flex-wrap gap-5 justify-end items-center w-full hidden sm:flex">
          <Link className="font-medium sm:hidden lg:block">Sign Up</Link>
          <Link className="min-w-[11vw] py-2 bg-[#5e50bf] text-white text-center rounded hover:bg-[#4e38db] rounded-full rounded-tr-none">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
