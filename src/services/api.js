import axios from "axios";
import {URL_TESTE} from '@env'

const api = axios.create({
    baseURL: `${URL_TESTE}`,
});

export default api;