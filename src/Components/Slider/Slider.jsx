import React, { useState } from 'react'
import Pic1 from './Pic1.jpg'
import Pic2 from './Pic2.jpg'
import Pic3 from './Pic3.jpg'
import './Slider.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
    const [currentSlide, SetCurrentSlide] = useState(0)

    const prevSlide = () => {
        SetCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
        console.log("deepak")
    }
    const nextSlide = () => {
        SetCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
        console.log("Kumar")
    }

    const data = [Pic1, Pic2, Pic3]

    return (
        <div className='frame'>

            <ArrowForwardIosIcon onClick={prevSlide} className='arrow left' />

            <ArrowForwardIosIcon onClick={nextSlide} className='arrow right' />

            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}       >
                <img className='sliderImage' src={data[0]} alt="" />
                <img className='sliderImage' src={data[1]} alt="" />
                <img className='sliderImage' src={data[2]} alt="" />
            </div>

        </div >
    )
}

export default Slider
