import Navbar from "./Navbar";
import { IoIosFlower } from "react-icons/io";
import { useSidebar } from "../Components/SidebarContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  return (
    <>
      <div className="flex w-full flex-col sm:flex-row">
        <div className={`sm:min-h-screen flex-1 p-5 bg-[#dcdee2] `}>
          <Navbar />
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {/* Card */}
              <div
                onClick={() => navigate("/service-provider")}
                className="bg-white cursor-pointer rounded-3xl shadow h-[276px] w-[260px] hover:shadow-xl transition flex flex-col"
              >
                  {/* user img */}
                  <div className="relative flex justify-center items-center">
                    <div className="h-[88px] w-[88px] overflow-hidden rounded-full absolute -top-12">
                      <img
                        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/e0edadda-bfe2-43fa-beb8-5705300d4795/47f9e62c-0090-4469-87d5-227260fd0d68.png"
                        alt=""
                      />
                    </div>
                    <div className="h-3 w-3 bg-[#02a847] rounded-full border-2 border-white absolute -bottom-6 right-[85px]"></div>
                  </div>
                <div className="h-[80%] bg-red-0 mt-auto flex flex-col justify-between">
                  {/* user name */}
                  <div className="w-full text-center space-y-1 relative">
                    <h3 className="font-semibold text-[22px] leading-[20px] tracking-normal align-middle font-montserrat">
                      Hansu Luu
                    </h3>
                    <p className="text-[#858FAD] text-[10px] font-medium font-montserrat">
                      Age 32 | Located in Brooklyn
                    </p>
                  </div>
                  {/* user details */}
                  <div className="flex justify-around">
                    <div className="flex flex-col justify-between text-center relative">
                      <strong className="text-xl font-semibold font-montserrat text-[#0E1E40]">
                        3
                      </strong>
                      <span className="text-xs font-medium text-[#858FAD]">
                        Active<br/> Services
                      </span>
                      <div className="absolute bottom-0 -right-5 h-10 border-r-2"></div>
                    </div>
                    <div className="flex flex-col text-center relative">
                      <strong className="text-xl font-semibold font-montserrat text-[#0E1E40]">
                        24
                      </strong>
                      <span className="text-xs text-[#858FAD]">
                        Satisfied<br/>Customers
                      </span>
                      <div className="absolute bottom-0 -right-5 h-10 border-r-2"></div>
                    </div>
                    <div className="flex flex-col justify-end text-center">
                      <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                      <span className="text-xs text-[#858FAD]">
                        Bronze<br/> level
                      </span>
                    </div>
                  </div>
                  <p className="text-[#858FAD] text-xs text-center px-3 font-medium font-montserrat">
                    Specializes in Hot Stone and Sports message.
                  </p>
                  {/* Boot Btn */}
                  <button className="text-[#2C3B58] font-semibold font-Montserrat text-sm text-center border-t-2 py-2 w-full hover:bg-[#5e50bf] hover:text-white transition-all duration-500 hover:rounded-full ">
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div
                onClick={() => navigate("/service-provider")}
                className="bg-white cursor-pointer rounded-3xl shadow h-[276px] w-[260px] hover:shadow-xl transition flex flex-col"
              >
                  {/* user img */}
                  <div className="relative flex justify-center items-center">
                    <div className="h-[88px] w-[88px] overflow-hidden rounded-full absolute -top-12">
                      <img
                        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/e0edadda-bfe2-43fa-beb8-5705300d4795/47f9e62c-0090-4469-87d5-227260fd0d68.png"
                        alt=""
                      />
                    </div>
                    <div className="h-3 w-3 bg-[#02a847] rounded-full border-2 border-white absolute -bottom-6 right-[85px]"></div>
                  </div>
                <div className="h-[80%] bg-red-0 mt-auto flex flex-col justify-between">
                  {/* user name */}
                  <div className="w-full text-center space-y-1 relative">
                    <h3 className="font-semibold text-[22px] leading-[20px] tracking-normal align-middle font-montserrat">
                      Hansu Luu
                    </h3>
                    <p className="text-[#858FAD] text-[10px] font-medium font-montserrat">
                      Age 32 | Located in Brooklyn
                    </p>
                  </div>
                  {/* user details */}
                  <div className="flex justify-around">
                    <div className="flex flex-col justify-between text-center relative">
                      <strong className="text-xl font-semibold font-montserrat text-[#0E1E40]">
                        3
                      </strong>
                      <span className="text-xs font-medium text-[#858FAD]">
                        Active<br/> Services
                      </span>
                      <div className="absolute bottom-0 -right-5 h-10 border-r-2"></div>
                    </div>
                    <div className="flex flex-col text-center relative">
                      <strong className="text-xl font-semibold font-montserrat text-[#0E1E40]">
                        24
                      </strong>
                      <span className="text-xs text-[#858FAD]">
                        Satisfied<br/>Customers
                      </span>
                      <div className="absolute bottom-0 -right-5 h-10 border-r-2"></div>
                    </div>
                    <div className="flex flex-col justify-end text-center">
                      <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                      <span className="text-xs text-[#858FAD]">
                        Bronze<br/> level
                      </span>
                    </div>
                  </div>
                  <p className="text-[#858FAD] text-xs text-center px-3 font-medium font-montserrat">
                    Specializes in Hot Stone and Sports message.
                  </p>
                  {/* Boot Btn */}
                  <button className="text-[#2C3B58] font-semibold font-Montserrat text-sm text-center border-t-2 py-2 w-full hover:bg-[#5e50bf] hover:text-white transition-all duration-500 hover:rounded-full ">
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div
                onClick={() => navigate("/service-provider")}
                className="bg-white cursor-pointer rounded-3xl shadow h-[276px] w-[260px] hover:shadow-xl transition flex flex-col"
              >
                  {/* user img */}
                  <div className="relative flex justify-center items-center">
                    <div className="h-[88px] w-[88px] overflow-hidden rounded-full absolute -top-12">
                      <img
                        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/e0edadda-bfe2-43fa-beb8-5705300d4795/47f9e62c-0090-4469-87d5-227260fd0d68.png"
                        alt=""
                      />
                    </div>
                    <div className="h-3 w-3 bg-[#02a847] rounded-full border-2 border-white absolute -bottom-6 right-[85px]"></div>
                  </div>
                <div className="h-[80%] bg-red-0 mt-auto flex flex-col justify-between">
                  {/* user name */}
                  <div className="w-full text-center space-y-1 relative">
                    <h3 className="font-semibold text-[22px] leading-[20px] tracking-normal align-middle font-montserrat">
                      Hansu Luu
                    </h3>
                    <p className="text-[#858FAD] text-[10px] font-medium font-montserrat">
                      Age 32 | Located in Brooklyn
                    </p>
                  </div>
                  {/* user details */}
                  <div className="flex justify-around">
                    <div className="flex flex-col justify-between text-center relative">
                      <strong className="text-xl font-semibold font-montserrat text-[#0E1E40]">
                        3
                      </strong>
                      <span className="text-xs font-medium text-[#858FAD]">
                        Active<br/> Services
                      </span>
                      <div className="absolute bottom-0 -right-5 h-10 border-r-2"></div>
                    </div>
                    <div className="flex flex-col text-center relative">
                      <strong className="text-xl font-semibold font-montserrat text-[#0E1E40]">
                        24
                      </strong>
                      <span className="text-xs text-[#858FAD]">
                        Satisfied<br/>Customers
                      </span>
                      <div className="absolute bottom-0 -right-5 h-10 border-r-2"></div>
                    </div>
                    <div className="flex flex-col justify-end text-center">
                      <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                      <span className="text-xs text-[#858FAD]">
                        Bronze<br/> level
                      </span>
                    </div>
                  </div>
                  <p className="text-[#858FAD] text-xs text-center px-3 font-medium font-montserrat">
                    Specializes in Hot Stone and Sports message.
                  </p>
                  {/* Boot Btn */}
                  <button className="text-[#2C3B58] font-semibold font-Montserrat text-sm text-center border-t-2 py-2 w-full hover:bg-[#5e50bf] hover:text-white transition-all duration-500 hover:rounded-full ">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
