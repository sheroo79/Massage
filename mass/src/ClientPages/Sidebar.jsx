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
        className={`max-h-screen min-h-screen relative sticky top-0 overflow-hidden bg-[#1f282d] text-white flex flex-col justify-between z-50
    ${isSidebarOpen ? "w-[277px]" : "w-0"}
    `}
      >
        <div className="flex justify-between sm:justify-center items-center m-4">
          <h1 className="text-[27px] font-bold font-poller text-center">Logo</h1>
          <IoMdClose
            className="text-2xl cursor-pointer sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        {/* sm:transform sm:-translate-y-52 lg:-translate-y-28 */}
        <div className={` ease-in-out h-[224px]`}>
          <ul className="list-none p-4 text-center flex flex-col gap-5 font-medium sm:w-full h-full">
            {menuItem.map(({ path, label }) => (
              <li
                key={path}
                className="w-full cursor-pointer"
                onClick={() => navigate(path)}
              >
                <div
                  className={`py-2 text-center rounded transition-all text-[16px] font-Montserrat font-semibold ${
                    location.pathname === path
                      ? "bg-[#5e50bf] text-white hover:bg-[#4e38db] rounded-full rounded-tr-none"
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
          {menuBtn && <button className="border min-h-9 px-4 py-2 rounded-lg text-sm font-Montserrat font-semibold leading-[17px]">
            {menuBtn}
          </button>}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
