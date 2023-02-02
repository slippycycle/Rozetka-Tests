import React from 'react'
import DevicesComponents from '../components/DevicesComponents'

export default function SelectedDevicesPage() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DevicesComponents type={window.location.pathname} />
        </div>
    )
}
