import { IoMdClose } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { useSidebar } from "../Components/SidebarContext";

function Sidebar({ menuItem = [],menuBtn = '' }) {
  const location = useLocation();
  const navigate = useNavigate()
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar(false);
  console.log(isSidebarOpen);
  return (
    <>
      <div
        className={`max-h-screen min-h-screen relative sticky top-0 overflow-x-auto bg-[#1f282d] text-white flex flex-col justify-between z-50
    ${isSidebarOpen ? "sm:w-[230px] md:w-[277px] w-full" : "w-0"}
    `}
      >
        <div className="flex justify-between sm:justify-center items-center m-4">
          <h1 className="text-[27.11px] font-normal font-poller text-center">Logo</h1>
          <IoMdClose
            className="text-2xl cursor-pointer sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        {/* sm:transform sm:-translate-y-52 lg:-translate-y-28 */}
        <div className={`h-[224px] sm:mb-auto sm:mt-16`}>
          <ul className="list-none p-4 text-center flex flex-col gap-5 font-medium sm:w-full h-full">
            {menuItem.map(({ path, label }) => (
              <li
                key={path}
                className="w-full cursor-pointer"
                onClick={() => navigate(path)}
              >
                <div
                  className={`py-2 text-center rounded transition-all text-[16.94px] font-montserrat font-semibold ${
                    location.pathname === path
                      ? "bg-[#5E50BF] text-white rounded-[20.33px] rounded-tr-none"
                      : "text-white"
                  }`}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto p-4">
          {menuBtn && <button className="border min-h-9 px-4 py-2 rounded-lg text-[16px] font-Montserrat font-semibold leading-[17px]">
            {menuBtn}
          </button>}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
