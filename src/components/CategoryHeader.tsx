import axios, { AxiosError } from 'axios'
import React from 'react'
import { Brand, Types } from '../models/models'
import { useAppSelector } from '../store/hooks'
import c from '../styles/CategoryHeader.module.scss'

interface CategoryHeaderProps {
    brands?: Brand[]
    category: string
}


export default function CategoryHeader({ brands,category }: CategoryHeaderProps) {

    const [categoryObject, setCategoryObject] = React.useState<Types | null>(null)
    const [error, setError] = React.useState<string | null>(null)

    async function fetchInfoAboutCurrentCategory() {

        try {

            const response = await axios.get<Types[]>(`http://localhost:3001/types?type=${category}`)

            setCategoryObject(response.data[0] as Types)


        }
        catch (e) {

            const err = e as AxiosError

            setError(err.message)

        }

    }

    React.useEffect(() => {
        fetchInfoAboutCurrentCategory()
    }, [])

    console.log(brands)

    return (
        <div className={c.category}>
            {brands?.length == 1?
                <h2>{error ? error : categoryObject?.fullTypeName + ' ' + brands[0]}</h2>
                :    
                <h2>{error ? error : categoryObject?.fullTypeName}</h2>
    }
        </div>
    )
}
