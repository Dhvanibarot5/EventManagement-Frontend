import React from 'react'
import TicketCard from './TicketCard'

function TicketSection() {
  return (
    <section className='bg-[#172943] py-14'>
        <div className="container mx-auto">
            <h1 className='text-[#2ad0bc] text-lg font-medium'>Get ready for an unforgettable journey through music</h1>
            <p className='text-white text-6xl font-bold py-5'>Secure your tickets now and get ready to experience a night of unforgettable performances.</p>
            <div className="flex justify-between py-7">
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            </div>
        </div>
    </section>
  )
}

export default TicketSection