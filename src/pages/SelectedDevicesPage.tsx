import React from 'react'
import SortbyBrandsLeftBar from '../components/SortbyBrandsLeftBar'

export default function SelectedDevicesPage() {

   console.log( window.location.pathname)


    return (
        <div style={{display:'flex'}}>
            <SortbyBrandsLeftBar brands={['awdwad']}/>
        </div>
    )
}
