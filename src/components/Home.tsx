import React from 'react'
import c from '../styles/HomePage.module.scss'
import BannerSlider from './BannerSlider'
import DiscountDevices from './DiscountDevices'
import HorizontalBasket from './HorizontalBasket'
import RecentlyViewedDevices from './RecentlyViewedDevices'
import SuggestionDevices from './SuggestionDevices'
import { useInView } from 'react-intersection-observer'
import HomeContent from './HomeContent'

interface HandleCategoryProps {
  handleCategory: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ handleCategory }: HandleCategoryProps) {

 

  return (
    <div className={c.home_container}>

      <HorizontalBasket />

      <div className={c.banner_wrap}>
        <BannerSlider />
      </div>
      <button className={c.show_category_btn} onClick={() => { handleCategory(prev => !prev) }}>
        Show categories
        <span className="material-symbols-outlined">
          category
        </span>
      </button>
      <HomeContent />
    </div >
  )
}
