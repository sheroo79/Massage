import { IoIosFlower } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";

function SPDetails() {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState("12:00");
  const datePickerRef = useRef(null);

  return (
    <>
      <div className="p-5 bg-[#F2F0FF] w-full">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full pt-5 gap-4">
          {/* left side */}
          <div className="grid lg:grid-rows-2 ">
            <div className="relative">
              {/* close icon */}
              <div className="absolute top-0 left-0 text-3xl cursor-pointer">
                <IoMdClose />
              </div>
              {/* img and details */}
              <div className="flex flex-col">
                {/* img sec */}
                <div className="text-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden mx-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H7BHbr8_2R9T3qnpMpjzdaxvc3UzC9gqXw&s"
                      alt=""
                    />
                  </div>
                  <h3 className="text-lg font-bold">Hansu Luu</h3>
                  <small className="text-gray-500 font-medium">
                    Age 32 | Located in Brooklyn
                  </small>
                </div>
                {/* details */}
                <div className="flex justify-center gap-3">
                  <div className="flex flex-col text-center relative">
                    <strong className="text-xl font-bold font-semibold">
                      3
                    </strong>
                    <span className="text-xs text-gray-500 font-medium">
                      Active Services
                    </span>
                    <div className="absolute bottom-0 -right-2 h-10 border-r-2 border-gray-300"></div>
                  </div>
                  <div className="flex flex-col text-center relative">
                    <strong className="text-xl font-bold font-semibold">
                      24
                    </strong>
                    <span className="text-xs text-gray-500 font-medium">
                      Satisfied Customers
                    </span>
                    <div className="absolute bottom-0 -right-2 h-10 border-r-2 border-gray-300"></div>
                  </div>
                  <div className="flex flex-col justify-end text-center">
                    <IoIosFlower className="text-xl text-[#5e50bf] mx-auto" />
                    <span className="text-xs text-gray-500 font-medium">
                      Bronze level
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs text-center mt-3">
                  Specializes in Hot Stone and Sports message.
                </p>
              </div>
            </div>
            {/* Gallery section */}
            <div>
              <label className="font-bold text-lg mb-3">Gallery</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div>
                  <img
                    src="/headmassage.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <img
                    src="/backmassage.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <img
                    src="/head-massage.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <img
                    src="/leagmassage.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <img
                    src="/massage7.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="grid gap-y-10">
            {/* contact section */}
            <div className="px-5 space-y-2 gap-y-10">
              <div className="text-white rounded">
                <h2 className="text-lg font-semibold mb-2 text-black text-lg">
                  Contacts
                </h2>
                <div className="bg-[#F5F3FF] rounded-xl text-black p-3 shadow w-2/3">
                  <p className="font-medium">Phone Number</p>
                  <small className="font-sans text-gray-500">
                    016 555 2345
                  </small>
                </div>
              </div>
              <div className="text-white rounded">
                <h2 className="text-lg font-semibold mb-2 text-black text-lg">
                  Available Services
                </h2>
                <div className="bg-[#F5F3FF] rounded-xl text-black p-3 py-5 shadow w-4/5 relative">
                  <p className="font-medium">Swedish Massage - 1hr</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-gray-500 line-clamp-2">
                    A relaxing massage using gentle techniques to soothe muscles
                    and improve circulation.
                  </small>
                  <button className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
            {/* Massage details section */}
            <div>
              <div className="text-white rounded">
                <div className="bg-[#F5F3FF] rounded-xl text-black p-3 py-5 shadow w-4/5 relative">
                  <p className="font-medium">Deep Massage Tissue</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-gray-500 line-clamp-2 pb-3">
                    Focuses on realiging deeper layers of muscles and connective
                    tissue.
                  </small>
                  <button className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium">
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div className="text-white rounded space-y-6">
                <div className="bg-[#F5F3FF] rounded-xl text-black p-3 py-5 shadow w-4/5 relative">
                  <p className="font-medium">Deep Massage Tissue</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-gray-500 line-clamp-2 pb-3">
                    Focuses on realiging deeper layers of muscles and connective
                    tissue.
                  </small>
                  <button className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium">
                    BOOK NOW
                  </button>
                </div>
                <div>
                  <label className="block text-[#1D2C4B] font-medium mb-1">
                    Booking Date and Time
                  </label>
                  <div className="relative w-2/3 cursor-pointer">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="w-full text-[#1D2C4B] font-medium border border-gray-300 focus:ring-2 outline-none rounded-md px-2 py-2"
                      wrapperClassName="w-full"
                      placeholderText="Jan, 12 1995"
                      ref={datePickerRef}
                    />
                    <div
                      onClick={() => datePickerRef.current.setFocus()}
                      className="absolute text-xl right-3 top-3 text-gray-500"
                    >
                      <FaCalendarDays />
                    </div>
                  </div>
                  <div className="relative w-2/3 cursor-pointer mt-3">
                    <input
                      type="time"
                      value={startTime}
                      className="w-full text-[#1D2C4B] font-medium border border-gray-300 focus:ring-2 outline-none rounded-md px-2 py-2"
                    />
                  </div>
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
