
export type Types = {
    type: string
    brands: string[]
}

export type Brands = string[]

export type Brand = string

interface DeviceImagesArray {
    colors: {}
    urls: string[]

}
interface imagesI {
    colors:string

}


export type sortDevicestypes = 'expensive' | 'rating' | 'cheap'

export interface DeviceI {
    name: string
    colors: string[]
    images: { [key: string] :string[]}
    id: string | number
    brand: string
    type: string
    price: number
    faceDescription: string
    description: string
    rating: number
}


