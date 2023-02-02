
export type Types = {
    type: string
    brands: string[]
}

export type Brands = string[]

export type Brand = string

interface DeviceImageItme {
    color: string
    urls: string[]
}

export interface DeviceI {
    name: string
    images: DeviceImageItme[]
    id: string | number
    brand: string
    type: string
    price: number
    description: string
    rating: number
}


