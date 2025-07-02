import Navbar from "./Navbar";
import { IoIosFlower } from "react-icons/io";
import { useSidebar } from "../Components/SidebarContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  return (
    <>
    <div className="flex w-full flex-col sm:flex-row">
      <div className={`sm:min-h-screen flex-1 p-5 bg-[#dcdee2] `}>
        <Navbar/>
        <div className="mt-20">
          <div className="flex justify-center sm:justify-start flex-wrap gap-14 sm:gap-6 md:gap-10 sm:gap-y-14 md:gap-y-16  lg:gap-5">
            {/* Card */}
            <div onClick={()=> navigate('/service-provider')} className="bg-white cursor-pointer rounded-xl shadow-lg min-h-14 w-60 sm:w-44 md:w-56 lg:w-56 xl:w-60 hover:shadow-xl transition pt-5 px-4">
              {/* user img */}
              <div className="relative w-16 mx-auto">
                <div className="h-16 w-16 overflow-hidden rounded-full absolute -top-14 ">
                  <img
                    src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/e0edadda-bfe2-43fa-beb8-5705300d4795/47f9e62c-0090-4469-87d5-227260fd0d68.png"
                    alt=""
                  />
                </div>
                <div className="h-3 w-3 bg-[#02a847] rounded-full border-2 border-white absolute -bottom-1 -right-0"></div>
              </div>
              {/* user name */}
              <div className="my-2 w-full text-center">
                <h3 className="text-2xl font-semibold ">Hansu Luu</h3>
                <p className="text-gray-500 text-xs font-medium">
                  Age 32 | Located in Brooklyn
                </p>
              </div>
              {/* user details */}
              <div className="flex">
                <div className="flex flex-col text-center relative">
                  <strong className="text-xl font-bold font-semibold">3</strong>
                  <span className="text-xs text-gray-500">Active Services</span>
                  <div className="absolute bottom-0 right-0 h-10 border-r-2"></div>
                </div>
                <div className="flex flex-col text-center relative">
                  <strong className="text-xl font-bold font-semibold">
                    24
                  </strong>
                  <span className="text-xs text-gray-500">
                    Satisfied Customers
                  </span>
                  <div className="absolute bottom-0 right-0 h-10 border-r-2"></div>
                </div>
                <div className="flex flex-col justify-end text-center">
                  <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                  <span className="text-xs text-gray-500">Bronze level</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-3">
                Specializes in Hot Stone and Sports message.
              </p>
              {/* Boot Btn */}
              <button className="text-gray-500 font-medium text-sm text-center border-t-2 py-2 w-full mt-5 hover:bg-[#f5f4fd] hover:rounded-full ">BOOK NOW</button>
            </div>
            <div onClick={()=> navigate('/service-provider')} className="bg-white cursor-pointer rounded-xl shadow-lg min-h-14 w-60 sm:w-44 md:w-56 lg:w-56 xl:w-60  hover:shadow-xl transition pt-5 px-4">
              {/* user img */}
              <div className="relative w-16 mx-auto">
                <div className="h-16 w-16 overflow-hidden rounded-full absolute -top-14 ">
                  <img
                    src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/e0edadda-bfe2-43fa-beb8-5705300d4795/47f9e62c-0090-4469-87d5-227260fd0d68.png"
                    alt=""
                  />
                </div>
                <div className="h-3 w-3 bg-[#02a847] rounded-full border-2 border-white absolute -bottom-1 -right-0"></div>
              </div>
              {/* user name */}
              <div className="my-2 w-full text-center">
                <h3 className="text-2xl font-semibold ">Hansu Luu</h3>
                <p className="text-gray-500 text-xs font-medium">
                  Age 32 | Located in Brooklyn
                </p>
              </div>
              {/* user details */}
              <div className="flex">
                <div className="flex flex-col text-center relative">
                  <strong className="text-xl font-bold font-semibold">3</strong>
                  <span className="text-xs text-gray-500">Active Services</span>
                  <div className="absolute bottom-0 right-0 h-10 border-r-2"></div>
                </div>
                <div className="flex flex-col text-center relative">
                  <strong className="text-xl font-bold font-semibold">
                    24
                  </strong>
                  <span className="text-xs text-gray-500">
                    Satisfied Customers
                  </span>
                  <div className="absolute bottom-0 right-0 h-10 border-r-2"></div>
                </div>
                <div className="flex flex-col justify-end text-center">
                  <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                  <span className="text-xs text-gray-500">Bronze level</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-3">
                Specializes in Hot Stone and Sports message.
              </p>
              {/* Boot Btn */}
              <button className="text-gray-500 font-medium text-sm text-center border-t-2 py-2 w-full mt-5 hover:bg-[#f5f4fd] hover:rounded-full ">BOOK NOW</button>
            </div>
            <div onClick={()=> navigate('/service-provider')} className="bg-white rounded-xl cursor-pointer shadow-lg min-h-14 w-60 sm:w-44 md:w-56 lg:w-56 xl:w-60 hover:shadow-xl transition pt-5 px-4">
              {/* user img */}
              <div className="relative w-16 mx-auto">
                <div className="h-16 w-16 overflow-hidden rounded-full absolute -top-14 ">
                  <img
                    src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/e0edadda-bfe2-43fa-beb8-5705300d4795/47f9e62c-0090-4469-87d5-227260fd0d68.png"
                    alt=""
                  />
                </div>
                <div className="h-3 w-3 bg-[#02a847] rounded-full border-2 border-white absolute -bottom-1 -right-0"></div>
              </div>
              {/* user name */}
              <div className="my-2 w-full text-center">
                <h3 className="text-2xl font-semibold ">Hansu Luu</h3>
                <p className="text-gray-500 text-xs font-medium">
                  Age 32 | Located in Brooklyn
                </p>
              </div>
              {/* user details */}
              <div className="flex">
                <div className="flex flex-col text-center relative">
                  <strong className="text-xl font-bold font-semibold">3</strong>
                  <span className="text-xs text-gray-500">Active Services</span>
                  <div className="absolute bottom-0 right-0 h-10 border-r-2"></div>
                </div>
                <div className="flex flex-col text-center relative">
                  <strong className="text-xl font-bold font-semibold">
                    24
                  </strong>
                  <span className="text-xs text-gray-500">
                    Satisfied Customers
                  </span>
                  <div className="absolute bottom-0 right-0 h-10 border-r-2"></div>
                </div>
                <div className="flex flex-col justify-end text-center">
                  <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                  <span className="text-xs text-gray-500">Bronze level</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-3">
                Specializes in Hot Stone and Sports message.
              </p>
              {/* Boot Btn */}
              <button className="text-gray-500 font-medium text-sm text-center border-t-2 py-2 w-full mt-5 hover:bg-[#f5f4fd] hover:rounded-full ">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
