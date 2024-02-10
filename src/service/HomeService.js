import { doGet } from "../api/BaseApi"

export const getListDataHome = async  ({params}) => {
    const response = await doGet({params})

    return response.data
}
