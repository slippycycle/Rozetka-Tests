// @ts-nocheck
import React, { useRef, useState } from 'react'
import c from '../styles/RangeSlider.module.scss'

export default function RangeSlider() {

  const [currentCords, setCurrentCords] = useState(0)
  const MaxPrice = 300000

  const sliderRef = useRef<HTMLDivElement>(null)
  const conatinerRef = useRef<HTMLDivElement>(null)
  const rangeLineFild = useRef<HTMLDivElement>(null)

  const isClicked = useRef<boolean>(false)

  const cords = useRef({ startX: 0, lastX: 0 })



  React.useEffect(() => {
    const maxWidth = conatinerRef.current.offsetWidth

    if (!sliderRef.current || !conatinerRef.current) return;

    const slider = sliderRef.current

    const container = conatinerRef.current




    const onMouseMove = (event: MouseEvent) => {

      if (!isClicked.current || isClicked.current == false) return;

      const nextX = event.clientX - cords.current.startX + cords.current.lastX

      if (nextX > maxWidth || nextX < 0) {

      }
      else {

        let procents = Math.ceil(nextX * 100 / 150)

        const PriceRange = MaxPrice * procents / 100

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
      isClicked.current = false
     
    }

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
      <h2>{conatinerRef?.current?.offsetWidth}</h2>
      <h2>{currentCords}</h2>
      <div ref={conatinerRef} className={c.range__container}>
        <div className={c.range__line}>
           <div ref={rangeLineFild} className={c.range__fild}></div>
        </div>
        <button draggable='false' ref={sliderRef} className={c.slider}></button>
      </div>
    </>
  )
}
