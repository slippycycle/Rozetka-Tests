import axios, { AxiosError } from "axios";

export async function fetchBrands () {
    try {

        const response = await axios.get<string[]>('http://localhost:3001/brands')

        return  response.data
        
    }
    catch (e: AxiosError | any) {
       return e.message as string 
    }
} 