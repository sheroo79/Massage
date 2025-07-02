import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
function Layout() {

  const clientData = [
    {label : 'Home', path : '/'},
    {label : 'Booking', path : '/bookings'},
    {label : 'Favorites', path : '/favorites'},
  ]
  return (
    <>
      <div className="flex">
        <SideBar menuItem={clientData}/>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

// import React, { useState } from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
// // import 'react-pro-sidebar/dist/css/styles.css';

// function MySidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar collapsed={collapsed}>
//         <Menu>
//           <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
//           <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
//           <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
//         </Menu>
//       </Sidebar>

//       {/* Button to toggle */}
//       <button onClick={() => setCollapsed(!collapsed)}>
//         {collapsed ? 'Open Sidebar' : 'Close Sidebar'}
//       </button>
//     </div>
//   );
// }

// export default MySidebar;
