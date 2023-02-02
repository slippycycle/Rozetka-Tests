import axios from "axios";


export async function fetchTypes() {

    try {

        const { data } = await axios.get('http://localhost:3001/types')

        const result = await data

        return result

    } catch (e) {
       return e.message
    }
}

