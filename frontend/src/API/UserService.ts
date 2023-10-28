import axios from '../AxiosConfig'

export default class APIService {
    static async getAllUsers() {
        const response = await axios.get('');
        return response;
    }

    static async getUser(term: string) {
        const response = await axios.get(`?term=${term}`);
        return response;
    }
};