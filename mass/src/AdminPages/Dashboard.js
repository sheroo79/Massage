import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AdminNavbar from "./AdminNavbar";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#5E50BF0D",
          border: "1px solid #ccc",
          minHeight: "14px",
          minWidth: "80px",
          textAlign: "center",
          padding: "0 5px",
          // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          fontSize: "9px",
          fontFamily: "sans-serif",
          color: "#5E50BF",
        }}
      >
        {/* <p style={{ margin: 0, fontWeight: 600 }}>{label}</p> */}
        <p style={{ margin: 0, fontWeight: 600 }}>
          Revenue: R{payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`} className="font-montserrat">
      <circle
        cx={0}
        cy={-2}
        r={3}
        fill={"#fff"}
        stroke="#858FAD"
        strokeWidth={2}
      />
      <text
        x={0}
        y={19}
        textAnchor="middle"
        fill="#858FAD"
        fontSize={12}
        fontWeight="500"
      >
        {payload.value}
      </text>
    </g>
  );
};
const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      dominantBaseline="middle"
      className="text-[10px] font-medium fill-[#858FAD] font-montserrat"
    >
      R{payload.value / 1000}k
    </text>
  );
};

function Home() {
  const data = [
    { month: "Jan", revenue: 10000 },
    { month: "Feb", revenue: 12000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 16000 },
    { month: "May", revenue: 32000 },
    { month: "Jun", revenue: 38753 },
    { month: "Jul", revenue: 21000 },
    { month: "Aug", revenue: 19000 },
    { month: "Sept", revenue: 22000 },
    { month: "Oct", revenue: 24000 },
    { month: "Nov", revenue: 23000 },
    { month: "Dec", revenue: 20000 },
  ];
  const appointments = [
    {
      name: "",
      service: "",
      
      start: "14:00",
    },
    {
      name: "Billy More, 24 Male",
      service: "Swedish Massage",
      time: "16:00 - 17:00",
      start: "16:00",
    },
  ];

  return (
    <>
      <div className="bg-[#F5F3FF] p-4 px-6 w-full">
        <AdminNavbar />
        <div className="grid lg:grid-cols-[65%_35%] mt-6">
          {/* left side */}
          <div>
            {/* Revenu */}
            <div className="bg-white rounded-lg py-4">
              <div className="flex justify-between items-center px-5 py-3">
                <h1 className="text-[16px] font-bold font-montserrat pl-12 py-1 text-[#1D2C4B]">
                  Total Revenue
                </h1>
                <div className="flex gap-2">
                  <span className="h-[10px] w-3 bg-[#5E50BF] rounded-full"></span>
                  <span className="text-[9px] text-[#858FAD]">2024</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250} className="px-5">
                <LineChart data={data}>
                  <defs>
                    <clipPath id="grid-clip">
                      <rect x="0" y="0" width="100%" height="80%" />
                    </clipPath>
                  </defs>
                  <CartesianGrid
                    vertical
                    horizontal={false}
                    stroke="#e5e5e5"
                    clipPath="url(#grid-clip)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#999"
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomXAxisTick />}
                  />
                  <YAxis
                    stroke="#999"
                    tickFormatter={(value) => `R${value / 1000}k`}
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomYAxisTick />}
                    domain={[10000, "auto"]}
                    ticks={[10000, 20000, 30000, 40000]}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      stroke: "#5E38F4",
                      strokeWidth: 2,
                      strokeDasharray: "5 5",
                    }}
                  />
                  <Line
                    type="basis"
                    dataKey="revenue"
                    stroke="#5E38F4"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            {/* today */}
            <div className="px-3 mt-5 bg-white">
              <h1 className="text-lg font-bold font-montserrat py-4 text-[#0E1E40]">
                Today
              </h1>
              <div className="grid grid-cols-[100px_1fr] gap-2 border rounded-lg">
                {/* Time Column */}
                <div className="flex flex-col items-center text-[12px] text-[#8F929C] font-montserrat bg-[#FAFAFB] border-r">
                  {["13:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                    <div
                      key={time}
                      className="h-20 flex items-center -rotate-90"
                    >
                      {time}
                    </div>
                  ))}
                </div>
                {/* Appointments Column */}
                <div className="flex flex-col w-full gap-5">
                  <div className="flex items-center px-2 mt-5 bg-transparent text-[#0E1E40]">
                    <div className="w-full p-3 rounded-3xl flex flex-col justify-center gap-1 text-sm bg-[#FDD6EB] h-[122px] max-w-[447px] rounded-br-none  border-l-[20px] border-[#F22294]">
                      <p className="font-semibold text-sm font-montserrat font-semibold">
                        Billy More, 24 Male
                      </p>
                      <p className="text-[#F22294] text-sm font-montserrat font-semibold">
                        Swedish Massage
                      </p>
                      <p className="text-xs font-normal font-montserrat">
                        14:00 - 15:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center px-2 mt-5 bg-transparent text-[#0E1E40]">
                    <div className="w-full p-3 rounded-3xl flex flex-col justify-center gap-1 text-sm bg-[#FDD8D9] h-[88px] max-w-[447px] rounded-br-none  border-l-[20px] border-[#D74042]">
                      <p className="font-semibold text-sm font-montserrat font-semibold">
                        Billy More, 24 Male
                      </p>
                      <p className="text-[#F22294] text-sm font-montserrat font-semibold">
                        Swedish Massage
                      </p>
                      <p className="text-xs font-normal font-montserrat">
                        14:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="bg-[#FAFAFA] rounded-lg p-3 px-4 shadow ml-4">
            <h1 className="text-lg font-bold py-1 text-[#1D2C4B] font-montserrat">
              New Bookings
            </h1>
            <div className="flex flex-col gap-8">
              <div className="rounded-3xl pt-6 flex flex-col gap-0.5 h-[146px] bg-[#FBFBFB]">
                <span className="font-semibold block pl-3 text-sm font-montserrat text-[#1D2C4B]">
                  Billy More, 24 Male
                </span>
                <span className="font-medium text-[#5e50bf] pl-3 block">
                  Swedish Massage
                </span>
                <small className="font-normal block mb-3 pl-3 text-[#1D2C4B] text-xs font-montserrat">
                  Date: Tue, 23 Dec 2024 3:00pm
                </small>
                <div className="rounded-full w-full h-9 items-center bg-[#FDE4E4] grid grid-cols-2 text-center rounded-tr-none">
                  <span className="text-red-500 items-center font-medium text-sm font-montserrat">
                    Decline
                  </span>
                  <span className="text-white rounded-full rounded-tr-none font-semibold bg-[#5E50BF] text-sm font-montserrat w-full h-full flex items-center justify-center">
                    Approve
                  </span>
                </div>
              </div>
              <div className="rounded-3xl pt-6 flex flex-col gap-0.5 h-[146px] bg-[#FBFBFB]">
                <span className="font-semibold block pl-3 text-sm font-montserrat text-[#1D2C4B]">
                  Billy More, 24 Male
                </span>
                <span className="font-medium text-[#5e50bf] pl-3 block">
                  Swedish Massage
                </span>
                <small className="font-normal block mb-3 pl-3 text-[#1D2C4B] text-xs font-montserrat">
                  Date: Tue, 23 Dec 2024 3:00pm
                </small>
                <div className="rounded-full w-full h-9 items-center bg-[#FDE4E4] grid grid-cols-2 text-center rounded-tr-none">
                  <span className="text-red-500 items-center font-medium text-sm font-montserrat">
                    Decline
                  </span>
                  <span className="text-white rounded-full rounded-tr-none font-semibold bg-[#5E50BF] text-sm font-montserrat w-full h-full flex items-center justify-center">
                    Approve
                  </span>
                </div>
              </div>
              <div className="rounded-3xl pt-6 flex flex-col gap-0.5 h-[146px] bg-[#FBFBFB]">
                <span className="font-semibold block pl-3 text-sm font-montserrat text-[#1D2C4B]">
                  Billy More, 24 Male
                </span>
                <span className="font-medium text-[#5e50bf] pl-3 block">
                  Swedish Massage
                </span>
                <small className="font-normal block mb-3 pl-3 text-[#1D2C4B] text-xs font-montserrat">
                  Date: Tue, 23 Dec 2024 3:00pm
                </small>
                <div className="rounded-full w-full h-9 items-center bg-[#FDE4E4] grid grid-cols-2 text-center rounded-tr-none">
                  <span className="text-red-500 items-center font-medium text-sm font-montserrat">
                    Decline
                  </span>
                  <span className="text-white rounded-full rounded-tr-none font-semibold bg-[#5E50BF] text-sm font-montserrat w-full h-full flex items-center justify-center">
                    Approve
                  </span>
                </div>
              </div>
              <div className="rounded-3xl pt-6 flex flex-col gap-0.5 h-[146px] bg-[#FBFBFB]">
                <span className="font-semibold block pl-3 text-sm font-montserrat text-[#1D2C4B]">
                  Billy More, 24 Male
                </span>
                <span className="font-medium text-[#5e50bf] pl-3 block">
                  Swedish Massage
                </span>
                <small className="font-normal block mb-3 pl-3 text-[#1D2C4B] text-xs font-montserrat">
                  Date: Tue, 23 Dec 2024 3:00pm
                </small>
                <div className="rounded-full w-full h-9 items-center bg-[#FDE4E4] grid grid-cols-2 text-center rounded-tr-none">
                  <span className="text-red-500 items-center font-medium text-sm font-montserrat">
                    Decline
                  </span>
                  <span className="text-white rounded-full rounded-tr-none font-semibold bg-[#5E50BF] text-sm font-montserrat w-full h-full flex items-center justify-center">
                    Approve
                  </span>
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
