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
import AdminLayout from "./AdminPages/AdminLayout";
import Dasboard from './AdminPages/Dashboard'
import Calendar from "./AdminPages/Calendar";
import Users from "./AdminPages/Users";
import ServiceProviders from "./AdminPages/ServiceProviders";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          {/* Client Layout */}
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="service-provider" element={<SPDetails/>}/>
            {/* Auth */}
            <Route path='signup' element={<SignUp/>}/>
          </Route>
            {/* Admin Layout*/}
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Dasboard/>}/>
              <Route path="/admin/calendar" element={<Calendar/>}/>
              <Route path="/admin/users" element={<Users/>}/>
              <Route path="/admin/serviceProviders" element={<ServiceProviders/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
