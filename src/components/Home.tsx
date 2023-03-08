import React from 'react'
import c from '../styles/HomePage.module.scss'
import BannerSlider from './BannerSlider'
import DiscountDevices from './DiscountDevices'
import HorizontalBasket from './HorizontalBasket'
import RecentlyViewedDevices from './RecentlyViewedDevices'
import SuggestionDevices from './SuggestionDevices'
import { useInView } from 'react-intersection-observer'

interface HandleCategoryProps {
  handleCategory: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ handleCategory }: HandleCategoryProps) {

  const [slidersVisible, setSlidersVisible] = React.useState<number>(1)
  const [btnVisible, setBtnVisible] = React.useState(true)


  const { ref, inView } = useInView({
    threshold: 0.8
  })

  React.useEffect(() => {

    if (slidersVisible > 2) {
      setBtnVisible(false)
    } else {
      setSlidersVisible(prev => prev + 1)
    }

    console.log(slidersVisible)

  }, [inView])

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


      <DiscountDevices />
      {slidersVisible > 1 ?
        <RecentlyViewedDevices />
        :
        null
      }
      {slidersVisible > 2 ?
        <SuggestionDevices />
        :
        null

      }
      {
        btnVisible?
        <div ref={ref}>show</div>
        : 
        null
      }


    </div >
  )
}
