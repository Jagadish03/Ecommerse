import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import Navigation from '../../Navigation'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='flex flex-col justify-center py-20 space-y-10'>
        <HomeSectionCarosel/>   
        <HomeSectionCarosel/>   
        <HomeSectionCarosel/>   
        <HomeSectionCarosel/>   
        </div>
         
    </div>
  )
}

export default HomePage