import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import Navigation from '../../Navigation'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <HomeSectionCarosel/>    
    </div>
  )
}

export default HomePage