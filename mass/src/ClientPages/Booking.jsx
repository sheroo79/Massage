import React from 'react'
import Navbar from './Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../Styling/style.scss'
function Booking() {
  const localizer = momentLocalizer(moment)
  return (
    <>
      <div className='bg-[#DCDEE2] w-full p-5'>
        <Navbar/>
        <div className='bg-white p-7 rounded-lg mt-4'>
          <Calendar
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </div>
    </>
  )
}

export default Booking

