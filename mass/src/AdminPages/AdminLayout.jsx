import React from 'react'
import Sidebar from '../ClientPages/Sidebar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    const adminMenu = [
    {label : 'Home', path : '/admin'},
    {label : 'Calendar', path : '/admin/calendar'},
    {label : 'Users', path : '/admin/users'},
    {label : 'Service Providers', path : '/admin/serviceProviders'},
  ]
  return (
    <>
        <div className='flex'>
            <Sidebar menuItem={adminMenu}/>
            <Outlet/>
        </div>
    </>
  )
}

export default AdminLayout