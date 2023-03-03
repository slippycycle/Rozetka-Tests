import axios, { AxiosError } from 'axios'
import React from 'react'
import DevicePageContent from '../components/DevicePageContent'
import DevicePageTopComponent from '../components/DevicePageTopComponent'
import Loader from '../components/Loader'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePage.module.scss'

export default function DevicePage() {

  //taking clear device id from url

  const [device, setDevicd] = React.useState<DeviceI | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)




  async function fetchingDeviceById() {

    try {
      const deviceId = window.location.pathname.replaceAll('/phone/', '').replaceAll('/laptops/', '').replaceAll('/consoles/', '')
      const response = await axios.get(`http://localhost:3001/products?id=${deviceId}`)
      return await response.data[0] as DeviceI
    } catch (error) {
      return error
    }
  }

  React.useEffect(() => {
    setLoading(true)
    fetchingDeviceById().then(res => setDevicd(res as DeviceI)).finally(() => setLoading(false))
  }, [])

  return (
    <div className={c.main_wrap}>
      {loading ?
        <Loader />
        :
        <>
          <DevicePageTopComponent device={device as DeviceI} />
          <DevicePageContent device={device as DeviceI} />
        </>
      }
    </div>
  )

}
