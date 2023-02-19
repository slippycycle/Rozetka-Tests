type UrlIcon = string

export type brand = string

export type Types = {
    type: string
    brands: string[]
    fullTypeName: string
    icon: UrlIcon
}

export type Brands = string[]




export type urlImg = string

export type Brand = string

interface DeviceImagesArray {
    colors: {}
    urls: string[]

}
interface imagesI {
    colors:string

}


export type colors = 'blue' | 'purple' | 'green' | 'red' | 'pink' | 'black'

export type sortDevicestypes = 'expensive' | 'rating' | 'cheap' | null | '' | undefined

export interface DeviceI {
    name: string
    colors: string[]
    questionsId: number
    images: { [key: string] :string[]}
    id: string | number
    brand: string
    type: string
    price: number
    faceDescription: string
    description: string
    rating: number
}

export type ReplyMessage =  Omit<Message, "replies">

export interface Message {

    data: string
    id: number
    from: string
    message: string
    replies: ReplyMessage[] 

}


