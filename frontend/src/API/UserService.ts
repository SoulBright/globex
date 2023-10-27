import axios from '../AxiosConfig'

export default class APIService {
    static async getUsers() {
        const response = await axios.get('')
        return response
    }
}   