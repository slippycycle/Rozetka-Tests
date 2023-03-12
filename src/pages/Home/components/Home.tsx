import React from 'react'
import c from '../styles/HomePage.module.scss'
import BannerSlider from '../../../components/BannerSlider'
import HorizontalBasket from '../../../components/HorizontalBasket'
import HomeContent from '../../../components/HomeContent'

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
