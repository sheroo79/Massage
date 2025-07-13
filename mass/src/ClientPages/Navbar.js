import { FiSidebar } from "react-icons/fi";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSidebar } from "../Components/SidebarContext";
const Navbar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useSidebar(false);
  return (
    <>
      <div
        className="flex items-center justify-between
         gap-5"
      >
        <div className="flex gap-2 w-full">
          <div
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="bg-white cursor-pointer text-[24px] h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] rounded-full flex justify-center items-center text-gray-600"
          >
            <FiSidebar />
          </div>
          <div
            className={`relative w-48 sm:min-w-[300px] lg:min-w-[400px] h-[48px] sm:h-[56px]`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-5 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-custom-faint"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-[#0E1E40]">
              <IoIosSearch className="text-[24px]" />
            </span>
          </div>
          <div className="bg-white hidden sm:hidden md:flex text-[24px] h-[56px] w-[56px] rounded-full flex justify-center items-center text-gray-600 cursor-pointer">
            <HiAdjustmentsVertical />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-end items-center w-full sm:flex font-montserrat">
          <Link
            to="/signUp"
            onClick={() => setIsSidebarOpen(false)}
            className={`font-semibold w-[65px] h-[24px] hidden md:block text-base ${
              isSidebarOpen ? "md:hidden xl:block" : "md:block"
            }`}
          >
            Sign Up
          </Link>
          <Link
            to="/signIn"
            onClick={() => setIsSidebarOpen(false)}
            className={`w-[85px] sm:w-[147px] h-[45px] sm:h-[51px] bg-[#5e50bf] flex items-center justify-center text-white text-center text-base font-semibold rounded rounded-full rounded-tr-none ${
              isSidebarOpen ? "sm:hidden lg:flex" : "flex"
            }`}
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
