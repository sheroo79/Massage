import AdminNavbar from "./AdminNavbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Calendar() {
  const calendarRef = useRef(null);
  const [activeView, setActiveView] = useState("dayGridMonth");
  const [currentTitle, setCurrentTitle] = useState("October 2024");

  const updateTitle = () => {
    const calendarApi = calendarRef.current.getApi();
    const view = calendarApi.view;
    const title = view.title;
    console.log(view);
    setCurrentTitle(title);
  };

  const handlePrev = () => {
    const next = calendarRef.current.getApi();
    next.prev();
    updateTitle();
  };
  const handleNext = () => {
    const next = calendarRef.current.getApi();
    next.next();
    updateTitle();
  };
  const handleViewChange = (viewName) => {
    setActiveView(viewName);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(viewName);
  };

  useEffect(() => {
    if (calendarRef.current) {
      updateTitle();
    }
  }, []);
  console.log(currentTitle);
  return (
    <>
      <div className="bg-[#F5F3FF] p-4 w-full h-full">
        <AdminNavbar />
        <div className="grid md:grid-cols-[25%_75%] space-x-4 mt-6">
          <div className="bg-white rounded-xl p-3">
            <h2 className="text-md font-bold text-[#1D2C4B] select-none">
              Today
            </h2>
            <div className="flex flex-col gap-5 mt-5">
              <div className="p-2 w-full rounded-xl border-l-[15px] border-l-[#EF2295] rounded-br-none bg-[#FDD6EB]">
                <span className="block text-[#1D2C4B] text-sm font-medium">
                  Billy More, 24 Male
                </span>
                <span className="block text-[#F665B4] text-sm font-medium">
                  Swedish Massage
                </span>
                <small className="block">16:00 - 17:00</small>
              </div>
              <div className="p-2 w-full rounded-xl border-l-[15px] border-l-[#D54044] rounded-br-none bg-[#FDD8D9]">
                <span className="block text-[#1D2C4B] text-sm font-medium">
                  Billy More, 24 Male
                </span>
                <span className="block text-[#F665B4] text-sm font-medium">
                  Swedish Massage
                </span>
                <small className="block">16:00 - 17:00</small>
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <div className="max-w-5xl mx-auto p-5 bg-white rounded-xl">
                <div className="flex justify-between mb-7">
                  <small className="text-[#0E1E40] font-semibold text-[13px]">
                    Today
                  </small>
                  {/* prev and next arrow */}
                  <div className="flex justify-between items-center gap-3 text-sm text-[#0E1E40]">
                    <IoIosArrowBack
                      onClick={handlePrev}
                      className="cursor-pointer"
                    />
                    <h2 className="text-center font-bold font-Montserrat  select-none">
                      {currentTitle}
                    </h2>
                    <IoIosArrowForward
                      onClick={handleNext}
                      className="cursor-pointer"
                    />
                  </div>
                  {/* Button Group */}
                  <div
                    className="inline-flex rounded-xl shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className={`px-4 py-2 text-[11.18px] font-medium ${
                        activeView === "timeGridDay"
                          ? "bg-[#5E50BF] text-white"
                          : "bg-white text-[#0E1E40]"
                      } border border-gray-300 rounded-s-xl`}
                      onClick={() => handleViewChange("timeGridDay")}
                    >
                      Day
                    </button>

                    <button
                      type="button"
                      className={`px-4 py-2 text-[11.18px] font-medium ${
                        activeView === "timeGridWeek"
                          ? "bg-[#5E50BF] text-white"
                          : "bg-white text-[#0E1E40]"
                      } border-t border-b border-gray-300`}
                      onClick={() => handleViewChange("timeGridWeek")}
                    >
                      Week
                    </button>

                    <button
                      type="button"
                      className={`px-4 py-2 text-[11.18px] font-semibold font-Montserrat ${
                        activeView === "dayGridMonth"
                          ? "bg-[#5E50BF] text-white"
                          : "bg-white text-[#0E1E40]"
                      } border border-gray-300 rounded-e-xl`}
                      onClick={() => handleViewChange("dayGridMonth")}
                    >
                      Month
                    </button>
                  </div>
                </div>
                <FullCalendar
                  ref={calendarRef}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  initialDate="2024-10-01"
                  headerToolbar={false}
                  dayHeaderClassNames={() =>
                    "bg-[#F1F4F9] text-gray-800 text-[13px] uppercase font-bold"
                  }
                  events={[
                    {
                      title: "Another Person",
                      date: "2024-10-03",
                      color: "#c4b5fd",
                    },
                    {
                      title: "Weekend Festival",
                      date: "2024-10-21",
                      color: "#f472b6",
                    },
                    {
                      title: "Some Booking",
                      start: "2024-10-25",
                      end: "2024-10-29",
                      color: "#fcd34d",
                    },
                    { title: "Training", date: "2024-10-30", color: "#60a5fa" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
