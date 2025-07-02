import React from "react";
import AdminNavbar from "./AdminNavbar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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
      name: "Billy More, 24 Male",
      service: "Swedish Massage",
      time: "14:00 - 15:00",
      start: "14:00",
      color: "#FDCFEA",
    },
    {
      name: "Billy More, 24 Male",
      service: "Swedish Massage",
      time: "16:00 - 17:00",
      start: "16:00",
      color: "#FAD6D6",
    },
  ];

  return (
    <>
      <div className="bg-[#F5F3FF] p-4 w-full">
        <AdminNavbar />
        <div className="grid lg:grid-cols-[65%_35%] mt-4">
          {/* left side */}
          <div>
            {/* Revenu */}
            <div className="bg-white rounded-lg p-3">
              <h1 className="text-lg font-extrabold px-6 py-1 text-[#1D2C4B]">
                Total Revenue
              </h1>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="30%"
                        stopColor="#5e50bf"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="85%"
                        stopColor="#5e50bf"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" className="text-sm" />
                  <YAxis
                    domain={[10000, 40000]}
                    tickFormatter={(v) => `R${v / 1000}k`}
                    className="text-sm"
                  />
                  <Tooltip
                    formatter={(value) => [
                      `R ${value.toLocaleString()}`,
                      "Revenue",
                    ]}
                    labelStyle={{ color: "#5e50bf" }}
                    contentStyle={{ borderRadius: "10px" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#5e50bf"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            {/* today */}
            <div className="px-3 mt-5 bg-white">
              <h1 className="text-lg font-extrabold px-6 py-1 text-[#1D2C4B]">
                Today
              </h1>
              <div className="grid grid-cols-[100px_1fr] gap-2 mt-4">
                {/* Time Column */}
                <div className="flex flex-col text-sm text-gray-400">
                  {["13:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                    <div key={time} className="h-20 flex items-start">
                      {time}
                    </div>
                  ))}
                </div>

                {/* Appointments Column */}
                <div className="flex flex-col w-full gap-5">
                  {appointments.map((item) => (
                    <div
                      key={item.time}
                      className="h-20 flex items-center px-2 bg-transparent"
                    >
                      <div
                        className="w-full p-3 rounded-xl text-sm"
                        style={{ backgroundColor: item.color }}
                      >
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-pink-600">{item.service}</p>
                        <p className="text-xs">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="bg-white rounded-lg p-3 px-4 shadow ml-4">
            <h1 className="text-lg font-extrabold py-1 text-[#1D2C4B]">
              New Bookings
            </h1>
            <div className="flex flex-col gap-8">
              <div className="rounded-xl shadow-lg flex flex-col gap-0.5 py-3">
                <span className="font-medium block px-3">
                  Billy More, 24 Male
                </span>
                <span className="font-medium text-[#5e50bf] px-3 block">
                  Swedish Massage
                </span>
                <small className="font-medium block px-3 mb-3">
                  Date: Tue, 23 Dec 2024 3:00pm
                </small>
                <div className="rounded-full w-full h-9 items-center bg-[#FDE4E4] grid grid-cols-2 text-center rounded-tr-none">
                  <span className="text-red-500 items-center">Decline</span>
                  <span className="text-white rounded-full rounded-tr-none bg-[#5E50BF] w-full h-full flex items-center justify-center">
                    Approve
                  </span>
                </div>
              </div>

              <div className="rounded-xl shadow-lg flex flex-col gap-0.5 py-3">
                <span className="font-medium block px-3">
                  Billy More, 24 Male
                </span>
                <span className="font-medium text-[#5e50bf] px-3 block">
                  Swedish Massage
                </span>
                <small className="font-medium block px-3 mb-3">
                  Date: Tue, 23 Dec 2024 3:00pm
                </small>
                <div className="rounded-full w-full h-9 items-center bg-[#FDE4E4] grid grid-cols-2 text-center rounded-tr-none">
                  <span className="text-red-500 items-center">Decline</span>
                  <span className="text-white rounded-full rounded-tr-none bg-[#5E50BF] w-full h-full flex items-center justify-center">
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
