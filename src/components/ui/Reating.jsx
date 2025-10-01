import React from 'react'
import star from '../../assets/svgs/reating-star.png'


const Reating = ({rating}) => {
  return (
    <div className="flex gap-6 items-center">
            <div className="flex gap-2">
              <img src={star} alt="" className="h-6" loading="lazy"/>
              <img src={star} alt="" className="h-6" loading="lazy"/>
              <img src={star} alt="" className="h-6" loading="lazy"/>
              <img src={star} alt="" className="h-6" loading="lazy"/>
              <img src={star} alt="" className="h-6" loading="lazy"/>
            </div>

            <div className="text-xl font-semibold"><span className="text-gray-800/60">{rating}</span>/ 5.0</div>
          </div>
  )
}

export default Reating