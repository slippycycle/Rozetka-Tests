
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


// "id": 1,
// "name": "Iphone 12",
// "brand": "apple",
// "type": "phone",
// "price": "24,000",
// "colors": ["blue","purple"],
// "description": "bla bla bla bla bla bla bla bla ",
// "rating": "1",
// "images": {
//     "purple": [
//         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_iphone12mini_q321_purple_pdp-image-1b_result_1_1_1.jpg",
//         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_iphone12mini_q321_purple_pdp-image-1a_result_1_1_1.jpg",
//         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_iphone12mini_q321_purple_pdp-image-2_result_1_1_1.jpg",
//         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_iphone12mini_q321_purple_pdp-image-3_result_1_1_1.jpg"
//     ],
//     "blue": [
//         "https://content.rozetka.com.ua/goods/images/big/30872903.jpg",
//         "https://content1.rozetka.com.ua/goods/images/big/30872861.jpg",
//         "https://content1.rozetka.com.ua/goods/images/big/30872883.jpg",
//         "https://content1.rozetka.com.ua/goods/images/big/30872918.jpg",
//         "https://content1.rozetka.com.ua/goods/images/big/30872938.jpg"
//     ]
// }
// },

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


