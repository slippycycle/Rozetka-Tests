import axios from 'axios'
import React from 'react'
import { SERVER_URL } from '../consts'
import { DeviceI } from '../models/models'
import { fetchSuggestion, fetchSuggestionNext } from '../store/features/Suggestions.SLice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SuggestionDevices.module.scss'
import ViewedeDeviceItem from './ViewedeDeviceItem'

export default function SuggestionDevices() {

  const [devices, setDevices] = React.useState<DeviceI[] | []>([])

  const { suggestionDevices, loading } = useAppSelector(state => state.suggetsionsReducer)

  const [count,setCount ] = React.useState<number>(2)


  const dispatch = useAppDispatch()


  React.useEffect(() => {

    dispatch(fetchSuggestion())

  }, [])

  function fetchNextPart() {

    dispatch(fetchSuggestionNext(count))
    setCount(prev => prev + 1)

  }

  return (
    <div className={c.wrap}>

      <div className={c.header_contaier}>
        <h1>Suggestion</h1>
        <span className="material-symbols-outlined">
          local_fire_department
        </span>
      </div>

      {loading ?
        <h2>Loading</h2>
        :
        <div className={c.content}>
          {suggestionDevices.map((dev) =>
            <div className={c.deviceItem_wrap}>
              <ViewedeDeviceItem deviceI={dev} />
            </div>
          )}
          <button onClick={fetchNextPart}>
          fetchNextPart
          </button>

        </div>

      }

    </div>
  )

}
