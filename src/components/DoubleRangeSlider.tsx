// @ts-nocheck
import c from '../styles/DoubleRangeSlider.module.scss'
import React, { useRef, useState } from 'react'



interface DoubleRangeSliderProps {
    maxSum: number
    startSum: number
    endSum: number
}


export default function DoubleRangeSlider({ maxSum, startSum, endSum }: DoubleRangeSliderProps) {



    const [currentMaxSum, setCurrentMaxSum] = useState(0)
    const [currentMinSum, setCurrentMinSum] = useState(0)


    const sliderRef = useRef<HTMLDivElement>(null)
    const secondSliderRef = useRef<HTMLDivElement>(null)
    const conatinerRef = useRef<HTMLDivElement>(null)
    const rangeLineFild = useRef<HTMLDivElement>(null)

    const isClicked = useRef<boolean>(false)
    const secondIsClicked = useRef<boolean>(false)

    const cords = useRef({ startX: maxSum, lastX: maxSum })
    const secondCords = useRef({ startX: maxSum, lastX: maxSum })





    React.useEffect(() => {


        if (!sliderRef.current || !conatinerRef.current || !secondSliderRef.current) return;

        const staticRangePxWidth = 150

        const slider = sliderRef.current
        const secondSlider = secondSliderRef.current

        const container = conatinerRef.current




        setCurrentMinSum(startSum)
        setCurrentMaxSum(endSum)

        // (20 * 100 / 200) => 10 // 200 as main sum // 20 as subSum 

        let defaultSumProcentFromMinSum = Math.ceil(startSum * 100 / maxSum)
        
        //( 130 * 20% / 100 )  => 26px

        let takePxbyProcentsMinSum = staticRangePxWidth * defaultSumProcentFromMinSum / 100

    

        slider.style.left = takePxbyProcentsMinSum + 'px'

        rangeLineFild.current.style.paddingLeft = takePxbyProcentsMinSum + 'px'



        let defaultSumProcentFromMaxSum = Math.ceil(endSum * 100 / maxSum)

        let takePxbyProcentsMaxSum = staticRangePxWidth * defaultSumProcentFromMaxSum / 100

        secondSlider.style.left = takePxbyProcentsMaxSum + 'px'

        rangeLineFild.current.style.paddingRight = takePxbyProcentsMaxSum + 'px'


        const onMouseMove = (event: MouseEvent) => {



            if (!isClicked.current || isClicked.current == false) return;

            const nextX = event.clientX - cords.current.startX + cords.current.lastX

            let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

            const PriceRange = maxSum * procents / 100

            if (PriceRange > maxSum || PriceRange < 0  || (staticRangePxWidth *  Math.ceil(PriceRange * 100 / maxSum) / 100 )  + 5 > secondCords.current.lastX ) {
                //dont allow slider gets out of range
            }
            else {
                //

                setCurrentMinSum(PriceRange)

                rangeLineFild.current.style.paddingLeft = nextX + 'px'

                slider.style.left = nextX + 'px'

               


            }

        }


        const onSecondMouseMove = (event: MouseEvent) => {

            if (!secondIsClicked.current || secondIsClicked.current == false) return;

            const nextX = event.clientX - secondCords.current.startX + secondCords.current.lastX

            let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

            const PriceRange = maxSum * procents / 100

            if (PriceRange > maxSum || PriceRange < 0 ||  ( (staticRangePxWidth *  Math.ceil( PriceRange * 100 / maxSum)) / 100 ) - 5 < cords.current.lastX ) {
                //dont allow slider gets out of range
            }
            else {
                //cords.current.lastX as px wdth
                //122 140 =>  
                //(20 * 100 / 200)

               console.log(  (staticRangePxWidth *  Math.ceil( PriceRange * 100 / maxSum)) / 100  ) ;

                setCurrentMaxSum(PriceRange)

                secondSlider.style.left = nextX + 'px'

                rangeLineFild.current.style.paddingRight = (staticRangePxWidth - nextX) + 'px'
            }

        }



        const onMouseDown = (event: MouseEvent) => {
            cords.current.startX = event.clientX
            isClicked.current = true

        }

        const onSecondMouseDown = (event: MouseEvent) => {
            secondCords.current.startX = event.clientX
            secondIsClicked.current = true

        }


        const onMouseUp = (event: MouseEvent) => {
            cords.current.lastX = slider.offsetLeft;
            isClicked.current = false


        }
        const onSecondMouseUp = (event: MouseEvent) => {
            secondCords.current.lastX = secondSlider.offsetLeft;

            secondIsClicked.current = false


        }

        const MouseLeave = (event: MouseEvent) => {
            cords.current.lastX = slider.offsetLeft;
            isClicked.current = false

        }

        onSecondMouseUp()
        onMouseUp()

        slider.addEventListener('mousedown', onMouseDown)
        secondSlider.addEventListener('mousedown', onSecondMouseDown)

        container.addEventListener('mouseup', onMouseUp)
        container.addEventListener('mousemove', onMouseMove)
        container.addEventListener('mouseleave', MouseLeave)

        container.addEventListener('mouseup', onSecondMouseUp)
        container.addEventListener('mousemove', onSecondMouseMove)
        container.addEventListener('mouseleave', onSecondMouseMove)

        const cleanUp = () => {
            slider.removeEventListener('mousedown', onMouseDown)
            slider.removeEventListener('mouseup', onMouseUp)

            container.removeEventListener('mousemove', onMouseMove)
            container.removeEventListener('mouseleave', onMouseMove)
        }

        return cleanUp

    }, [])

    //

    return (
        <>

            <h2>Max sum{currentMaxSum}</h2>
            <h2>Min sum{currentMinSum}</h2>
            <div ref={conatinerRef} className={c.container}>

                <div className={c.range__container}>
                    <div ref={rangeLineFild} className={c.range__line}>
                        <div className={c.range__fild}></div>
                    </div>
                    <button ref={sliderRef} className={c.slider}></button>

                    <button ref={secondSliderRef} className={c.second__slider}></button>
                </div>

            </div>



        </>
    )
}
