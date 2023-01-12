import React from 'react'
import Categoris from '../../Components/Categoris/Categoris'
import Contact from '../../Components/Contact/Contact'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'
const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedProducts type="featured" />
            <Categoris />
            <FeaturedProducts type="trending" />
            <Contact />

        </div>
    )
}

export default Home