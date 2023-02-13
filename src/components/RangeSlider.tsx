// @ts-nocheck
import React, { useRef, useState } from 'react'
import c from '../styles/RangeSlider.module.scss'

interface RangeSliderProps {
  maxSum: number

}

export default function RangeSlider({ maxSum }: RangeSliderProps) {

  // const [currentCords, setCurrentCords] = useState(0)
  // const MaxPrice = 200000

  // const sliderRef = useRef<HTMLDivElement>(null)
  // const conatinerRef = useRef<HTMLDivElement>(null)
  // const rangeLineFild = useRef<HTMLDivElement>(null)

  // const isClicked = useRef<boolean>(false)

  // const cords = useRef({ startX: 0, lastX: 0 })



  // React.useEffect(() => {


  //   if (!sliderRef.current || !conatinerRef.current) return;


  //   const slider = sliderRef.current

  //   const container = conatinerRef.current

  //   const staticRangePxWidth = 120

  //   console.log(staticRangePxWidth, 'WWWD')



  //   const onMouseMove = (event: MouseEvent) => {

  //     if (!isClicked.current || isClicked.current == false) return;

  //     const nextX = event.clientX - cords.current.startX + cords.current.lastX

  //     let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

  //     const PriceRange = maxSum * procents / 100

  //     if (PriceRange > maxSum || PriceRange < 0) {
  //       //dont allow slider gets out of range
  //     }
  //     else {
  //       //
  //       let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

  //       const PriceRange = maxSum * procents / 100

  //       setCurrentCords(PriceRange)
  //       rangeLineFild.current.style.width = procents + '%'
  //       slider.style.left = nextX + 'px'
  //     }

  //   }

  //   const onMouseDown = (event: MouseEvent) => {
  //     cords.current.startX = event.clientX
  //     isClicked.current = true

  //   }

  //   const onMouseUp = (event: MouseEvent) => {
  //     cords.current.lastX = slider.offsetLeft;
  //     isClicked.current = false

  //   }

  //   const onMouseLeave = (event: MouseEvent) => {
  //     isClicked.current = false
  //   }

  //   container.addEventListener('mouseup', onMouseUp)
  //   slider.addEventListener('mousedown', onMouseDown)
  //   container.addEventListener('mousemove', onMouseMove)
  //   container.addEventListener('mouseleave', onMouseMove)

  //   const cleanUp = () => {
  //     slider.removeEventListener('mousedown', onMouseDown)
  //     slider.removeEventListener('mouseup', onMouseUp)
  //     container.removeEventListener('mousemove', onMouseMove)
  //     container.removeEventListener('mouseleave', onMouseMove)
  //   }

  //   return cleanUp

  // }, [])
















  const [currentCords, setCurrentCords] = useState(0)
  const MaxPrice = 200000

  const sliderRef = useRef<HTMLDivElement>(null)
  const conatinerRef = useRef<HTMLDivElement>(null)
  const rangeLineFild = useRef<HTMLDivElement>(null)

  const isClicked = useRef<boolean>(false)

  const cords = useRef({ startX: maxSum, lastX: maxSum })


  React.useEffect(() => {


    if (!sliderRef.current || !conatinerRef.current || !rangeLineFild.current) return;

    const staticRangePxWidth = 120

    const slider = sliderRef.current

    const container = conatinerRef.current


    const defaultSum = 50000


   
    setCurrentCords(defaultSum)
    
    //50%
    let defaultSumProcentFromMaxSum = Math.ceil(defaultSum * 100 / maxSum)

    //
   //50%?  ???staticRangePxWidth


    let takePxbyProcents = staticRangePxWidth * defaultSumProcentFromMaxSum / 100

    slider.style.left = takePxbyProcents + 'px'
    rangeLineFild.current.style.width = defaultSumProcentFromMaxSum + '%'






    const onMouseMove = (event: MouseEvent) => {

      if (!isClicked.current || isClicked.current == false) return;

      const nextX = event.clientX - cords.current.startX + cords.current.lastX

      let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

      const PriceRange = maxSum * procents / 100

      if (PriceRange > maxSum || PriceRange < 0) {
        //dont allow slider gets out of range
      }
      else {
        //
        let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

        const PriceRange = maxSum * procents / 100

        setCurrentCords(PriceRange)
        rangeLineFild.current.style.width = procents + '%'
        slider.style.left = nextX + 'px'
      }

    }

    const onMouseDown = (event: MouseEvent) => {
      cords.current.startX = event.clientX
      isClicked.current = true

    }


    const onMouseUp = (event: MouseEvent) => {
      cords.current.lastX = slider.offsetLeft;
      console.log('d')
      isClicked.current = false

    }

    onMouseUp()


    container.addEventListener('mouseup', onMouseUp)
    slider.addEventListener('mousedown', onMouseDown)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseMove)

    const cleanUp = () => {
      slider.removeEventListener('mousedown', onMouseDown)
      slider.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseMove)
    }

    return cleanUp

  }, [])



  return (
    <>
      {/* <h2>{currentCords}</h2>
      <div ref={conatinerRef} className={c.container}>


        <div className={c.range__container}>
          <div className={c.range__line}>
            <div ref={rangeLineFild} className={c.range__fild}></div>
          </div>
          <button draggable='false' ref={sliderRef} className={c.slider}></button>
        </div>

      </div> */}

      <h2>{currentCords}</h2>
      <div ref={conatinerRef} className={c.container}>


        <div className={c.range__container}>
          <div className={c.range__line}>
            <div ref={rangeLineFild} className={c.range__fild}></div>
          </div>
          <button draggable='false' ref={sliderRef} className={c.slider}></button>
        </div>

      </div>



    </>
  )
}
