import { CiBellOn } from "react-icons/ci";
import "../Styling/style.scss";
import { useSidebar } from "../Components/SidebarContext";
import { FiSidebar } from "react-icons/fi";

function AdminNavbar() {
    const { setIsSidebarOpen } = useSidebar()
  return (
    <>
      <div className="flex justify-between items-center bg-white rounded-xl px-3">
        <div className="flex items-center gap-2">
          <div
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="bg-[#F5F3FF] cursor-pointer text-xl h-10 min-w-10 rounded-full flex justify-center items-center text-gray-600"
          >
            <FiSidebar />
          </div>
          <h1 className="font-extrabold text-2xl text-[#1D2C4B]">DashBoard</h1>
        </div>
        <div className="p-4 flex items-center gap-3">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="text-[#5e50bf]">Online</span>
          <div className="text-3xl">
            <CiBellOn />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H7BHbr8_2R9T3qnpMpjzdaxvc3UzC9gqXw&s"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNavbar;
