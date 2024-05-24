import React from 'react'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repaet h-screen w-full pb-12'>
        <div className='max_padd_container relative top-32 xs:top-52'>
            <h1 className="h1 capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
            <p className='text-gray-500 regular-16 mt-6 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
                 laborum. Atque officiis nisi consequuntur, deserunt quia ipsam l
                 audantium accusantium cum nihil animi ut! Itaque et obcaecati
                  voluptates qui corrupti quos.</p>
            <div className='max-xs:flex-col flex gap-2 mt-6'>
                <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop now</NavLink>
                <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer/>Offers</NavLink>
            </div>           
        </div>
        
    </section>
  )
}

export default Hero