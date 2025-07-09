import { IoIosFlower } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";

function FilledDetails() {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState("12:00");
  const datePickerRef = useRef(null);
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
                <div className="text-center">
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
          </div>
          {/* right side */}
          <div className="grid gap-y-10">
            {/* contact section */}
            <div className="space-y-8 gap-y-10 w-4/5">
              <div className="text-white rounded">
                <div className="py-5 pb-7 relative bg-[#FFFFFF33] text-[#0E1E40] rounded-3xl p-4 shadow-[2px_4px_24px_0px_#5E50BF0D]">
                  <p className="font-medium">Swedish Massage - 1hr</p>
                  <span className="text-[#5E50BF] text-sm font-medium">
                    R980.00
                  </span>
                  <small className="font-sans text-[#858FAD] line-clamp-2">
                    A relaxing massage using gentle techniques to soothe muscles
                    and improve circulation.
                  </small>
                  <button className="bg-[#5E50BF] w-[17vw] py-2 rounded-full rounded-tr-none absolute -bottom-4 right-0 text-white font-medium">
                    BOOK NOW
                  </button>
                </div>
              </div>
              {/* Booking and Appointment */}
              <div>
                <label className="block text-[#1D2C4B] font-medium mb-1">
                  Booking Date and Time
                </label>
                <div className="relative w-full flex justify-center cursor-pointer">
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
                    className="absolute text-xl right-3 top-3 text-[#858FAD]"
                  >
                    <FaCalendarDays />
                  </div>
                </div>
                <div className="relative w-full cursor-pointer mt-3">
                  <input
                    type="time"
                    value={startTime}
                    className="w-full text-[#1D2C4B] font-medium border border-gray-300 focus:ring-2 outline-none rounded-md px-2 py-2"
                  />
                </div>
                <div className="flex justify-between w-full gap-2 mt-5">
                  <button className="bg-transparent w-full text-[#5E50BF] border border-[#5E50BF] py-2 rounded-full rounded-tr-none font-medium">
                    Cancel
                  </button>
                  <button className="bg-[#5E50BF] w-full py-2 rounded-full rounded-tr-none text-white font-medium">
                    Confirm
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

export default FilledDetails;
