import React from 'react'
import HoverImage from './HoverImage'

const EventCard = ({event}) => {

    const {image, date, year, time, title} = event

    const formatedDate = `${date}, ${year} ${time}`

  return (
    <div className='flex flex-col gap-2'>

       <HoverImage src={image} alt="event-image" className="w-full aspect-square object-cover" />
        {/* date */}
        <div className='text-gray-600 font-thin text-sm '>{formatedDate}</div>

        {/* title */}
        <h3 className='text-xl'>{title}</h3>
    </div>
  )
}

export default EventCard