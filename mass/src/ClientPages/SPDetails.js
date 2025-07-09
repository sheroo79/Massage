import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function SPDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-5 bg-[#F2F0FF] w-full">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full pt-10 gap-4">
          {/* left side */}
          <div className="space-y-9">
            <div className="relative">
              {/* close icon */}
              <div className="absolute top-0 left-0 text-3xl cursor-pointer md:hidden">
                <IoMdClose />
              </div>
              {/* img and details */}
              <div className="flex flex-col">
                {/* img sec */}
                <div className="text-center relative">
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H7BHbr8_2R9T3qnpMpjzdaxvc3UzC9gqXw&s"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-3.5 w-3.5 bg-[#02a847] rounded-full border-2 border-white absolute bottom-5 right-0.5"></div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#0E1E40] font-Montserrat">
                    Hansu Luu
                  </h3>
                  <small className="text-[#858FAD] font-medium text-[12px]">
                    Age 32 | Located in Brooklyn
                  </small>
                </div>
                {/* details */}
                <div className="flex justify-evenly mt-6 w-96 mx-auto">
                  <div className="flex flex-col text-center relative font-montserrat">
                    <strong className="text-xl text-[#0E1E40] font-bold font-semibold ">
                      3
                    </strong>
                    <span className="text-[10px] font-medium text-[#858FAD] font-medium">
                      Active
                      <br /> Services
                    </span>
                    <div className="absolute bottom-0 -right-7 h-10 border-r border-gray-300"></div>
                  </div>
                  <div className="flex flex-col text-center relative">
                    <strong className="text-xl text-[#0E1E40] font-bold font-semibold">
                      24
                    </strong>
                    <span className="text-[10px] font-medium text-[#858FAD] font-medium">
                      Satisfied
                      <br /> Customers
                    </span>
                    <div className="absolute bottom-0 -right-7 h-10 border-r border-gray-300"></div>
                  </div>
                  <div className="flex flex-col justify-end items-center gap-1 text-center">
                    <div className="w-[19px] h-[19px] overflow-hidden rounded-full">
                      <img src="image.jpg" alt="" className="h-full" />
                    </div>
                    <span className="text-[10px] font-medium text-[#858FAD] font-medium">
                      Bronze
                      <br /> level
                    </span>
                  </div>
                </div>
                <p className="text-[#858FAD] text-[14px] mt-7 w-[50%] mx-auto font-medium font-montserrat text-center mt-3">
                  Specializes in Hot Stone and Sports message.
                </p>
              </div>
            </div>
            {/* Gallery section */}
            <div>
              <label className="font-semibold text-lg font-montserrat text-[#0E1E40]">
                Gallery
              </label>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                <div className="w-full h-full max-h-[124px] max-w-[124px] ">
                  <img
                    src="/image1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-full max-h-[124px] max-w-[124px] ">
                  <img
                    src="/image2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-full max-h-[124px] max-w-[124px]">
                  <img
                    src="/image3.jpg"
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="relative w-full h-full max-h-[124px] max-w-[124px] overflow-hidden">
                  <img
                    src="/image4.jpg"
                    alt=""
                    className="w-full h-full object-cover blur-sm"
                  />
                  <div className="absolute inset-0 bg-[#5E50BF73] filter blur-[8px]"></div>
                </div>

                <div className="relative w-full h-full max-h-[124px] max-w-[124px]  overflow-hidden">
                  <img
                    src="/image5.jpg"
                    alt=""
                    className="w-full h-full object-cover blur-sm"
                  />
                  <div className="absolute inset-0 bg-[#5E50BF73] filter blur-[8px]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="grid gap-y-10">
            {/* contact section */}
            <div className="space-y-2 gap-y-10 w-4/5">
              <div className="text-white rounded mb-4">
                <h2 className="text-lg font-semibold mb-2 text-[#0E1E40] text-lg">
                  Contacts
                </h2>
                <div className="bg-[#FFFFFF33] text-[#0E1E40] rounded-3xl p-4 shadow-[2px_4px_24px_0px_#5E50BF0D]">
                  <p className="font-medium">Phone Number</p>
                  <small className="font-sans text-[#858FAD]">
                    016 555 2345
                  </small>
                </div>
              </div>
              <div className="text-white rounded">
                <h2 className="text-lg font-semibold mb-2 text-[#0E1E40] text-lg">
                  Available services
                </h2>
                <div className="py-5 pb-7 relative bg-[#FFFFFF33] text-[#0E1E40] rounded-3xl p-4 shadow-[2px_4px_24px_0px_#5E50BF0D]">
                  <p className="font-medium">Swedish Massage - 1hr</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-[#858FAD] line-clamp-2">
                    A relaxing massage using gentle techniques to soothe muscles
                    and improve circulation.
                  </small>
                  <button
                    onClick={() => navigate("/filled-details")}
                    className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
            {/* Massage details section */}
            <div className="space-y-8 w-4/5 flex flex-col justify-center">
              <div className="text-white rounded">
                <div className="bg-[#FFFFFF33] text-[#0E1E40] rounded-3xl p-4 shadow-[2px_4px_24px_0px_#5E50BF0D] py-5 shadow relative">
                  <p className="font-medium">Deep Massage Tissue</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-[#858FAD] line-clamp-2 pb-3">
                    Focuses on realiging deeper layers of muscles and connective
                    tissue.
                  </small>
                  <button
                    onClick={() => navigate("/filled-details")}
                    className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div className="text-white rounded space-y-6">
                <div className="bg-[#FFFFFF33] text-[#0E1E40] rounded-3xl p-4 shadow-[2px_4px_24px_0px_#5E50BF0D] py-5 shadow relative">
                  <p className="font-medium">Deep Massage Tissue</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-[#858FAD] line-clamp-2 pb-3">
                    Focuses on realiging deeper layers of muscles and connective
                    tissue.
                  </small>
                  <button
                    onClick={() => navigate("/filled-details")}
                    className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium"
                  >
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

export default SPDetails;
