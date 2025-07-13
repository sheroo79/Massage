import "./App.css";
import Home from "./ClientPages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./ClientPages/Booking";
import Favorites from "./ClientPages/Favorites";
import { SidebarProvider } from "./Components/SidebarContext";
import SignUp from "./auth/SignUp";
import SPDetails from "./ClientPages/SPDetails";
import Layout from "./ClientPages/ClientLayout";
// Admin Layout
import AdminLayout from "./Pages/AdminPages/AdminLayout";
import Dashboard from "./Pages/AdminPages/Dashboard";
import Calendar from "./Pages/AdminPages/Calendar";
import Users from "./Pages/AdminPages/Users";
import ServiceProviders from "./Pages/AdminPages/ServiceProviders";
import SignIn from "./auth/SignIn";
import FilledDetails from "./ClientPages/FilledDetails";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          {/* Client Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="service-provider" element={<SPDetails />} />
            <Route path="filled-details" element={<FilledDetails />} />
            {/* Auth */}
            <Route path="signUp" element={<SignUp />} />
            <Route path="signIn" element={<SignIn />} />
          </Route>
          {/* Admin Layout*/}
          <Route path="/admin" element={<AdminLayout role="admin" />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/calendar" element={<Calendar />} />
            <Route path="/admin/users" element={<Users />} />
            <Route
              path="/admin/serviceProviders"
              element={<ServiceProviders />}
            />
          </Route>
          {/* SP Layout */}
          <Route
            path="/service"
            element={<AdminLayout role="service_provider" />}
          >
            <Route index element={<Dashboard role="service_provider" />} />
            <Route
              path="calendar"
              element={<Calendar role="service_provider" />}
            />
            <Route
              path="services"
              element={<ServiceProviders role="service_provider" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
