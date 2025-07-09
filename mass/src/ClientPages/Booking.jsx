import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { momentLocalizer } from "react-big-calendar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../Styling/style.scss";
import Navbar from "./Navbar";
function Booking() {
  const calendarRef = useRef(null);
  const [activeView, setActiveView] = useState("dayGridMonth");
  const [currentTitle, setCurrentTitle] = useState("October 2024");
  const localizer = momentLocalizer(moment);

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
  return (
    <>
      <div className="bg-[#DCDEE2] w-full p-5">
        <Navbar />
        <div className="mt-8">
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
              <div className="inline-flex rounded-xl shadow-sm" role="group">
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
    </>
  );
}

export default Booking;
