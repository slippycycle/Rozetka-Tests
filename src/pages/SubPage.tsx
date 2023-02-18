import React from 'react'
import DeviceQuestionsSubPage from '../components/DeviceQuestionsSubPage'
import DeviceSliderSubPage from '../components/DeviceSliderSubPage'
import DeviceCharacteristicsSubPage from '../components/DeviceСharacteristics.'
import { SelectedSubPageContext } from '../context'

import { DeviceI, urlImg } from '../models/models'

export type SelectedSubPageType = 'All information' |  'Questions' |  'characteristics'

interface SubPageProps {
    currentImgs: urlImg[]
    device:DeviceI
    
}

export default  function SubPages({currentImgs,device}:SubPageProps) {

    const {selected} = React.useContext(SelectedSubPageContext)

    console.log('sub page rendered')

   

    switch (selected) {
        case 'characteristics':
            return (
              <DeviceCharacteristicsSubPage/>   
          )
          break;
        case  'Questions' :
            return (
                <DeviceQuestionsSubPage questionsId={device.questionsId}/>
            )
          break;
        case 'All information' :
            return (
                <DeviceSliderSubPage src={currentImgs} />     
          )
          break;
        default:
            return (
                  <DeviceSliderSubPage src={currentImgs} />
            )
         
      }
    return (
    <>
     
    </>
)

}
