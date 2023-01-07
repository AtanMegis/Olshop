import React, { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import './Slider.scss'

export const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0)

  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }


  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className='slider'>
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={data[0]} alt="1" />
        <img src={data[1]} alt="2" />
        <img src={data[2]} alt="3" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </div>
  )
}
