import axios, {AxiosPromise} from 'axios';

import {API_URL} from "../utils/connection";
import {payloadGet} from "../utils/payloadBase";

class ItemService {
    getItemList(search: string): AxiosPromise {
        return axios.request({...payloadGet, url: `${API_URL}/items?q=${search}` });
    }

    getItemDetail(id: string):AxiosPromise {
        return axios.request({...payloadGet, url: `${API_URL}/items/${id}`});
    }
}
export default new ItemService();

