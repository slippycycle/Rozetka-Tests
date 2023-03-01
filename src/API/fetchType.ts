import axios from "axios"
import { Types } from "../models/models"

// phone / laptop / console ???
type DevicesType = string

export async function takeType(takeCurrentTypeThrowUrl: DevicesType) {

    const response = await axios.get<Types[]>(`http://localhost:3001/types?type=${takeCurrentTypeThrowUrl}`)

    return response.data[0] as Types
}

