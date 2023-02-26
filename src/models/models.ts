import { type } from "os"

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

export type Characteristic = {
    header: string
    body: string
}

export interface DeviceI {
    name: string
    colors: string[]
    characteristics: Characteristic[]
    questionsId: number
    images: { [key: string] :string[]}
    id: string | number
    brand: string
    type: string
    price: number
    faceDescription: string
    description: string
    rating: number
    oldPrice: number
    seller: string
}

export type MessageId = string

export type ReplyMessageId = string



export type ReplyMessage =  Omit<Message, "replies">   





export interface Chat {
    id: string
    messages: Message[]
} 


export interface Message {
    data: string
    id: MessageId
    from: string
    message: string
    replies: ReplyMessage[] 

}

