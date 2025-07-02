import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../Components/SidebarContext";

function Sidebar({ menuItem = [] }) {
  const location = useLocation();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar(false);
  console.log(isSidebarOpen);
  return (
    <>
      <div
        className={`max-h-screen min-h-screen relative sticky top-0 overflow-hidden bg-[#1f282d] text-white flex flex-col justify-between z-50 transition-[width] duration-300 ease-in-out
    ${isSidebarOpen ? "min-w-[25%]" : "w-[0%]"}
    `}
      >
        <div className="flex justify-between items-center m-4">
          <h1 className="text-3xl font-bold font-serif text-center">Logo</h1>
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div
          className={`sm:transform sm:-translate-y-52 lg:-translate-y-28 duration-300 ease-in-out`}
        >
          <ul className="list-none pt-5 p-4 text-center space-y-4 font-medium sm:w-full">
            {menuItem.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`${
                    location.pathname === path &&
                    "block w-full py-2 bg-[#5e50bf] text-white text-center rounded hover:bg-[#4e38db] rounded-full rounded-tr-none"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto p-4">
          <button className="border min-h-9 px-4 py-2 rounded-lg text-sm">
            Become a service provider
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
